const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  devtool,
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: 'main.[contenthash].js',
    assetModuleFilename: 'assets/[name][hash][ext]',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
    })
  ],
  module: {
    rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader',
        },
        {
            test: /\.(c|sa|sc)ss$/i,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(woff|woff2|ttf)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[name][ext]',
            }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};