var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './index.jsx',
    output: {path: __dirname, filename: 'dist/bundle.js'},

    module: {
        loaders: [
            // {test: '/.jsx?$/', loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']}},
            {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
            {test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
      }


}