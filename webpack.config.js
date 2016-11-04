var webpack = require('webpack');
var path = require("path");
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');

module.exports = {
  entry: {
    home: './home.js',
    browse: './browse.js',
    app:'./app.js',
    vendor: './vendor.js'
  },
  output: {
    filename: "./public/[name].bundle.js",
    chunkFilename: "./public/[name].bundle.js"
  },
  plugins: [
    new CommonsChunkPlugin({
      minChunks: Infinity,
      name: "vendor"
    })
  ],
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: { presets: ['es2015'] }
    },{
      test: /\.tag$/,
      loader: 'tag'
    }]
  },
  devServer: {
      contentBase: '/public'
  }
};
