module.exports = {
    // publicPath:'/',
    devServer: {
        proxy: {
            '/app/mock/290365': { 
                target: 'http://rap2api.taobao.org/', 
            }
        }
    }
}