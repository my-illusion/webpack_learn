const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  mode: "development",
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    filename: "main.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    disableHostCheck: true
  },
  optimization: {
    moduleIds: 'named'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};