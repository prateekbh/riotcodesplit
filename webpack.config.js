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
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js",
    chunkFilename: "[name]-[id].chunk.js"
  },
  plugins: [
    new CommonsChunkPlugin({
      filename: "vendor.js",
      name: "vendor"
    }),
    new VendorChunkPlugin('vendor'),
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
