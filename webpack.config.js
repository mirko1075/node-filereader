const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  entry: {
    server: path.resolve(__dirname, 'src/server.ts'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
    ],
  },
  target: 'node',
  resolve: {
    extensions: ['.ts'],
    exclude: [/node_modules/, /dist/, /coverage/, /test/],
  },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './package.json',
          to: '../dist/package.json',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts'],
  },
  externals: [nodeExternals()],
  mode: 'production',
  devtool: 'source-map',
  optimization: {},
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
