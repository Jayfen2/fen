const path = require("path") // 引入文件路径
const HtmlWebpackPlugin = require("html-webpack-plugin")

const srcPath = path.join(__dirname,'..','src') // 入口位置
const disPath = path.join(__dirname,'..','dist') // 出口位置
const devpath = path.join(__dirname,'..','public')// 绝对路径
module.exports = {
    entry:path.join(srcPath,'index.js' ),
    output:{
        filename:"app.js", // 打包文件名
        path:disPath,
        publicPath:"/dist/"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                include:srcPath,//只转化
                exclude:/node_modules/ // 不转化
            },
            {
                test:/\.css$/,
                loader:['style-loader','css-loader',"postcss-loader"]
            },
            {
                test:/\.less$/,
                loader:['style-loader','css-loader',"less-loader","postcss-loader"]
            },
            // {
            //     test:/\.(jpg|jpeg|gif|png)$/,
            //     loader:"file-loader"
            // }
        ]
    },
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(devpath,"index.html"),
            filename:'index.html'
        })
    ],
    devServer:{
        port:8000,
        progress:true, // 显示打包进度条
        open:true, // 自动打开浏览器
        contentBase: devpath,
    }
}