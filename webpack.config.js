const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const MODE = 'development'; // development/production
const IS_DEV = (MODE === 'development');

module.exports = {
  mode: MODE,
  context: path.resolve(__dirname, 'src'),

  devServer: {
    port: 5050,
    hot: IS_DEV,
  },

  entry: {
    index: './index.js',
  },

  output: {
    filename: getFileNameByMode('js'),
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@public': path.resolve(__dirname, 'public'),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      minify: { collapseWhitespace: !IS_DEV },
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'public/favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
    new MiniCssExtractPlugin({
      filename: getFileNameByMode('css'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              // '@babel/preset-env',
              '@babel/preset-react',
            ],
            // plugins: [
            //   '@babel/plugin-syntax-dynamic-import',
            // ],
          },
        }],
      },
      {
        test: /\.css/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: IS_DEV,
            reloadAll: true,
          },
        }, 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)/,
        use: ['file-loader'],
      },
    ],
  },

  optimization: {
    splitChunks: { chunks: 'all' },
  },
};

if (!IS_DEV) {
  module.exports.optimization.minimizer = [
    new OptimizeCssAssetWebpackPlugin(),
    new TerserWebpackPlugin(),
  ];
}

function getFileNameByMode(ext) {
  return IS_DEV ? `[name].${ext}` : `[name].[hash].${ext}`;
}