const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') }
            ],
          }),
        new Dotenv({
            path: `./.env.${process.env.NODE_ENV || 'development'}`, // Path to .env file (this is the default)
        })
    ],
    module:{
        rules:[
            {
                test:/\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/'
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    devServer: {
        historyApiFallback: true,
    }
};