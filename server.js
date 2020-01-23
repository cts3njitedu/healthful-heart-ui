const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const app = express();
const http = require("http");
const dotenv = require('dotenv');
dotenv.config();
const request = require('request');

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/api/*', function (req, res) {
  let newUrl = req.url.replace(/^(\/api)/, "");
  console.log("This is the server:", process.env.REACT_APP_HEALTHFUL_HEART_URL)
  console.log("This is the url:", newUrl)
  console.log(process.env.NODE_ENV);
  let requestPort = process.env.NODE_ENV ? null : 8000;
  var options = {
    url: process.env.REACT_APP_HEALTHFUL_HEART_URL + newUrl,
    method: "GET",
    headers: req.headers

  }
  request(options, function(err, response, body) {
    let json = JSON.parse(body);
    console.log(response.headers);
    console.log(json)
    res.status(response.statusCode).json(json)
  })

})
app.get('/login', function(req, res) {
  console.log("Why are you here!!!!!!");
})
// app.post('/api/*', function (req, res) {
//   let newUrl = req.url.replace(/^(\/api)/, "");

//   axios.request({
//     url: process.env.REACT_APP_HEALTHFUL_HEART_URL + newUrl,
//     method: "post" 
//   }).then(response => {
//     console.log(response.headers)
//     return res.json(response.data)

//   }).catch(error => {
//     console.log(error)
//     return res.json(error)
//   });

// })
// if (process.env.NODE_ENV === 'production') {
app.get('*', function (req, res) {
  if (req)
    console.log("This is generic", req.url)
  app.use(express.static("build"));
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// }


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});