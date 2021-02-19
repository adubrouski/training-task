const path = require('path');
require('dotenv').config();

const HTMLWebpackPlugin = require('html-webpack-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'),
  TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.MODE === 'development';

////////////////////////////////////////////////////////

const setMinimize = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (!isDev) {
    config.minimizer = [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

const setCssLoader = (loaderName) => {
  const loader = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        reloadAll: true,
        hmr: isDev,
      },
    },
    {
      loader: 'css-loader',
    },
  ];

  if (loaderName) {
    loader.push(loaderName);
  }

  return loader;
};

const setBabelLoader = (loaderName) => {
  const loader = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  ];

  if (loaderName) {
    loader[0].options.presets.push(loaderName);
  }

  return loader;
};

const setFilename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

//////////////////////////////////////////////////////////////////////////////////////

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: ['@babel/polyfill', './index.js'],
  },
  output: {
    path: __dirname + '/build/',
    filename: `./js/${setFilename('js')}`,
  },
  optimization: setMinimize(),
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    port: 4200,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: '../public/index.html',
      favicon: '../public/favicon.ico',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${setFilename('css')}`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: setCssLoader(),
      },
      {
        test: /\.s[ac]ss$/,
        use: setCssLoader('sass-loader'),
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: setFilename('[ext]'),
              outputPath: 'assets/img/',
              publicPath: '../assets/img/',
            },
          },
        ],
      },
      {
        test: /\.(woff|ttf)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: setFilename('[ext]'),
              outputPath: 'assets/fonts/',
              publicPath: '../assets/fonts/',
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: setBabelLoader('@babel/preset-react'),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: setBabelLoader('@babel/preset-react'),
      },
    ],
  },
};
