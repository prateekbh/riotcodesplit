var webpack = require('webpack');

module.exports = {
    entry: './index',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          { 
          	test: /\.tags$|\.tag$/, 
          	exclude: /node_modules/, 
          	loader: 'babel-loader'
        	},
      		{
      			test: /\.tags$|\.tag$/, 
      	  	loader: 'tag'
      		}
        ]
    },
    devServer: {
        contentBase: '/public'
    }
};
