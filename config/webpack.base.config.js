
const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        app: "./main.js"    // 入口 js
    },
    output: {   //打包输出目录
        path: path.join(__dirname, '../dist'), //打包输出路径
        filename: '[name].js'     //打包输出文件名字 name 对应的是 entry 里面的 app
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new HtmlWebpackPlugin({
            filename: 'index.html', //html文件名
            template: 'index.html', //制定文件模版
            inject: true     //是否引用打包好的js
        })
    ]
};