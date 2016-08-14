var path = require('path');
var webpack = require('webpack')

module.exports = {
    devtools: 'eval-source-map',
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    }
}
