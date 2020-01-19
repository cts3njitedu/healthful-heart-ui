const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            target: 'http://localhost:8000',
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
    console.log(proxyRes.headers)
    // if (proxyRes.headers['set-cookie'] != null) {
    //     var cookie = proxyRes.headers['set-cookie']
    //     var access_token = cookie[0]
    //     res.append("access_token", access_token.substring(access_token.indexOf("=")+1))
    // }
    Object.keys(proxyRes.headers).forEach(function (key) {

           res.append(key, proxyRes.headers[key]);
    });
}