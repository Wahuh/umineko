const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const autoprefixer = require("autoprefixer");
const webpack = require('webpack');


const CSSModuleLoader = {
    loader: "css-loader",
    options: {
        modules: true,
        sourceMap: true,
        localIdentName: "[local]__[hash:base64:5]",
    }
};

const postCSSLoader = {
    loader: "postcss-loader",
    options: {
        ident: "postcss",
        sourceMap: true,
        plugins: () => [
            autoprefixer({
                browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]  
            })
        ],
    }
};

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        publicPath: '/',
    },

    devServer: {
        historyApiFallback: true,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [
                    // fallback to style-loader in development
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    CSSModuleLoader,
                    postCSSLoader,
                    "sass-loader",
                ]
            }, 
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    // fallback to style-loader in development
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }, 
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};