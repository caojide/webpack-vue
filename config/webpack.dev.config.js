
const path = require('path')
const webpack  = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports  = {
    mode: 'development',
    entry: {
        app: './main.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].js"
    },
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  //设置别名，不然使用 import  识别不了 vue
            '@': path.join(__dirname, 'src')
        }
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude:/node_modules/, //排除 node_modules 文件夹
                options: {
                    extractCSS: true // 提取.vue文件中的style作为单个css文件
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
            {
                test: '/\.js$/', //匹配js文件
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets: ['env'] //作为参数传入 babel-loader，babel-loader会根据浏览器的不同，自动编译成 es5 或者es6 语法
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html'),
            inject: 'body'
        })
    ],
    devServer: {
        port: 9999,
        allowedHosts:[
            'localhost',
            'www.cc.net'
        ],
        inline: true, //自动刷新
        hot: true,
        progress: false,
        open: true
    }

}