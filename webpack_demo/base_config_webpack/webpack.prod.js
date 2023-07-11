// 线上开发 webpack 配置
const webpackCommonConf = require("./webpack.config.js")
const { smart } = require("webpack-merge")

module.exports = smart(webpackCommonConf, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                // loader:"file-loader"
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 5 * 1024,
                        outputPath: 'dist/',
                        esModule: false
                    }
                },
            },
            // 添加 file-loader 配置
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'dist/',
                        esModule: false,
                        name: '[path][name].[hash:8].[ext]',
                    },

                },
            }
        ]
    },
    output: {
        // publicPath: 'dist/' 
      }
})