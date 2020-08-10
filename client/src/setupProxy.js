const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://mern-store-burguer.herokuapp.com/',
            changeOrigin: true,
        })
    );
};

//porta 5000 segue a mesma porta do server
