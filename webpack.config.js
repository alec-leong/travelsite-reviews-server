const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

const env = dotenv.config().parsed;
const envVariableNamesAndValues = Object.keys(env).reduce((accumulator, envVariableName) => {
  accumulator[`process.env.${envVariableName}`] = JSON.stringify(env[envVariableName]);
  return accumulator;
}, {});

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin(envVariableNamesAndValues),
  ],
  node: {
    fs: 'empty',
  },
};
