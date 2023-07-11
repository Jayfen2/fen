// 线下开发 webpack 配置
const webpackCommonConf = require("./webpack.config.js")
const {smart} = require("webpack-merge")
  
const path = require("path") // 引入文件路径
const devpath = path.join(__dirname,'..','public')// 绝对路径

module.exports = smart(webpackCommonConf,{
    mode:"development",
    module: {
        rules: [
          {
            test: /\.(jpg|jpeg|gif|png)$/,
            loader: "file-loader",
            outputPath: '/dist/',
          }
        ]
      },
    devServer: {
        port: 8000,
        progress: true, // 显示打包的进度条
        open: true, // 自动打开浏览器
        contentBase: devpath,
    }
});