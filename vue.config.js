module.exports = {
    devServer: {
        port: 5820,
        host: 'localhost',
        https: false,
        open: true,
        proxy: {
            '/dev-api': {
                target: 'http://localhost:3008/',
                changeOrigin: true,
                pathRewrite: {
                    '^/dev-api': '',
                }
            }
        },
    },
    lintOnSave: false,
    productionSourceMap: false
}