
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: "development",
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './main.js'
  },
  output: {
    path:path.join(__dirname, '/dist'),
    filename: "[name].js"
  },
  resolve:{
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
      }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader', 
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    allowedHosts:[
      "webpack.study.com",
      "localhost"
    ],
    hot:true,
    lazy: true,
    open: true,
    port: 3000
  },

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new VueLoaderPlugin(),
    new  htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
