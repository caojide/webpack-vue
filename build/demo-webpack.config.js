const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname,  'main'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};





const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: '../main',
  output:{
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.json', '.js', '.vue', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/'),
    hot:true,
    host: 'localhost',
    port: 3000,
    clientLogLevel: 'waring'
  },
  plugin:[
    new webpack.NamedModulesPlugin(), // show correct file name in console on update
    // new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: '../main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {test: /\.js$/, use: 'babel-core'},
      {test: /\.vue$/, use: 'vue-loader'},
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve:['.js', '.vue', '.css'],
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../index.html',
      inject: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
    allowedHosts: [
      "localhost",
      "webpack.study.com"
    ],
    open: true,
    lazy: true,
    index: 'index.html',
    historyApiFailback: { //开启h5的history模式，拦截对应的action
      rewrites: [
        {from: /^\/$/, to: '/index.html'},
        {from: /./, to: '/src/error/404.html'}
      ]
    },
    clientLogLevel: 'error' // 开启错误日志
  }
}