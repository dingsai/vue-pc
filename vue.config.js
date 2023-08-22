const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;//可视化打包页面
module.exports = {
    publicPath:'./',
    configureWebpack:{
        externals: { //打包不包含以下内容 通过index.html cdn引入
            'vue':'Vue',
            'vue-router':'VueRouter',
            'vuex':'Vuex',
            'element-ui':'ELEMENT',
            'axios':'axios'
        },
        // performance: {
        //     hints: 'warning',
        //     // 入口起点的最大体积
        //     maxEntrypointSize: 50000000,
        //     // 生成文件的最大体积
        //     maxAssetSize: 30000000,
        //     // 只给出 js 文件的性能提示
        //     assetFilter: function (assetFilename) {
        //       return assetFilename.endsWith('.js')
        //     }
        // },
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    },
    devServer: {
        proxy: {
            '/app/mock/290365': { 
                target: 'http://rap2api.taobao.org/', 
            }
        }
    }
}