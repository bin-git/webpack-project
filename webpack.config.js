// webpack是node写出来的，使用node语法

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');  // 打包输出html模板文件插件

module.exports = {
    mode: 'development',            //打包后的模式，有两种：production 默认生产模式   development开发模式
    entry: "./src/index.js",       //入口文件
    output: {                      //出口
        filename: 'bundle.js',      // 打包后的文件名，所有依赖模块合并到此
        path: path.resolve(__dirname, 'dist'),  //打包后的路径，必须是一个绝对路径，(__dirname表示以当前目录生成一个打包后的路径，可不写)
    },
    devServer: {                     //开发服务器配置              
        port: 3008,                  //端口号
        progress: true,              // 底部是否出现 进度条
        contentBase: './dist',     // 热跟新目录,启动一个 http://localhost:3003/ 打开指向 dist 目录
        open: true,                  //自动打开浏览器
        compress: true,               //精简压缩
    },
    plugins: [                        //数组，存放所有webpack插件
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}



