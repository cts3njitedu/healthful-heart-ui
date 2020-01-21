const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const proxy = require('http-proxy-middleware')
const axios = require('axios')
const http = require("http")
require('dotenv').config()
// module.exports = function(app) {
//   app.use(
//       '/api',
//       proxy({
//           target: "http://localhost:5000",
//           changeOrigin: true,
//           pathRewrite: {
//               '^/api' : ""
//           },
//           secure: false
//       })
//   )
// }
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
  var options = {
    host: "healthful-heart-app.herokuapp.com",
    path: "/login",
    method: "GET"

  }
  http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).end();
  res.json({"message":"Hello World"})
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