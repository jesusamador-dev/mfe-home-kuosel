const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const deps = require('./package.json').dependencies;
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config({ path: './.env.devlocal' });
const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new CleanWebpackPlugin(),
  new ModuleFederationPlugin({
    name: 'mfe_home_kuosel',
    filename: 'remoteEntryHome.js',
    remotes: {
      mfe_ux_kuosel: `mfe_ux_kuosel@http://localhost:3000/kuosel/ux/v1/remoteEntryUx.js`,
    },
    shared: {
      react: {
        singleton: true,
        eager: true,
        requiredVersion:deps["react"],
      },
      'react-dom': {
        singleton: true,
        eager: true,
        requiredVersion: deps['react-dom'],
      },
    },
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist/kuosel/home/v1/'),
    publicPath: 'http://localhost:8081/kuosel/home/v1/',
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'), // Agrega este alias
    },
  },
  plugins: plugins,
  devServer: {
    port: process.env.PORT,
    historyApiFallback: {
      index: `index.html`,
    },
    allowedHosts: 'all',
    hot: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  mode: isProduction ? 'production' : 'development',
};
