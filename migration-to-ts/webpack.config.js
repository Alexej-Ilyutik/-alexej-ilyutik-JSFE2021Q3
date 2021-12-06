var path = require('path');
var merge = require('webpack-merge').merge;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
var ESLintPlugin = require('eslint-webpack-plugin');
var baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin(),
        // new ESLintPlugin({extensions:['ts', 'js']}),
    ],
};
module.exports = function (_a) {
    var mode = _a.mode;
    var isProductionMode = mode === 'prod';
    var envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');
    return merge(baseConfig, envConfig);
};
