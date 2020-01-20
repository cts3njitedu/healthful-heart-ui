const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            target: process.env.REACT_APP_HEALTHFUL_HEART_URL,
            changeOrigin: true,
            pathRewrite: {
                '^/api' : ""
            },
            onProxyRes: relayResponseHeaders,
            onProxyReq: relayRequestHeaders,
            secure: false
        })
    )
}
function relayRequestHeaders(proxyReq, req) {
    Object.keys(req.headers).forEach(function (key) {
      proxyReq.setHeader(key, req.headers[key]);
    });
  }
function relayResponseHeaders(proxyRes, req, res) {  
    Object.keys(proxyRes.headers).forEach(function (key) {

           res.append(key, proxyRes.headers[key]);
    });
}