// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressPlugin = require('progress-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const config = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    server: 'http',
    open: {
      app: {
        name: 'chrome',
        arguments: ['--incognito'],
      },
    },
    host: 'localhost',
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: 'false',
      inject: 'body',
      favicon: './src/assets/favicon.svg',
      scriptLoading: 'defer',
    }),
    new CleanWebpackPlugin(),
    new ProgressPlugin(true),
    new ESLintPlugin(),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: true,
          minimize: false, // minify: 'true', минимизирует код html
          // interpolate: true,
        },
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          stylesHandler,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      overrideBrowserslist: [
                        'defaults',
                        'ie >= 8',
                        'last 4 version',
                      ],
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   type: 'asset',
      // },
      {
        test: /\.(?:gif|png|jpg|jpeg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/img/[name][ext][query]',
        },
      },
      {
        test: /\.(?:ico)$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/ico/[name][ext][query]',
        },
      },
      {
        test: /\.(?:svg)$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/svg/[name][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/fonts/[name][ext][query]',
        },
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = 'development';
  }
  return config;
};
