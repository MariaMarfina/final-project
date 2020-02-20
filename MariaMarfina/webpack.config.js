const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
            {
              test: /\.s?css$/,
              use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
              ]
            },
            {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                  },
                },
              ],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
          ]  
    },
    plugins: [
            new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin ({
            filename: 'style.css',
            path: path.resolve(__dirname, 'dist'),
        })
    ],
    devServer: {
      hot: true,
      historyApiFallback: true
    }
}