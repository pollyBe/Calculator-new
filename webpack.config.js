const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
        },
      };

module.exports = (env) => ({
  mode: env.development ? 'development' : 'production',
  entry: path.resolve(__dirname, './src/js/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ Title: 'Calculator' }),
    new ESLintPlugin({
      extensions: ['js'],
      fix: true,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  ...devServer(env.development),
});
