// const proxy = require('http-proxy-middleware')

// module.exports = function(app) {
//     app.use(
//         '/api',
//         proxy({
//             target: "http://localhost:5000",
//             changeOrigin: true,
//             pathRewrite: {
//                 '^/api' : ""
//             },
//             onProxyRes: relayResponseHeaders,
//             onProxyReq: relayRequestHeaders,
//             secure: false
//         })
//     )
// }
// function relayRequestHeaders(proxyReq, req) {
//     console.log(process.env.REACT_APP_HEALTHFUL_HEART_URL)
//     Object.keys(req.headers).forEach(function (key) {
//       proxyReq.setHeader(key, req.headers[key]);
//     });
//   }
// function relayResponseHeaders(proxyRes, req, res) {  
//     console.log(process.env.REACT_APP_HEALTHFUL_HEART_URL)
//     Object.keys(proxyRes.headers).forEach(function (key) {
//            res.append(key, proxyRes.headers[key]);
//     });
// }