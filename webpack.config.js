var webpack = require('webpack');
var path = require("path");
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');

module.exports = {
  entry: {
    home: './home.js',
    browse: './browse.js',
    product: './product.js',
    app:'./app.js',
    vendor: './vendor.js'
  },
  output: {
    filename: "./public/[name].bundle.js",
    chunkFilename: "./public/[name].bundle.js"
  },
  plugins: [
    new CommonsPlugin({
      minChunks: Infinity,
      name: "vendor"
    }),
    new webpack.ProvidePlugin({
        riot: "riot"
    })
  ],
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
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
