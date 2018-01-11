const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'home/home': ["./src/home/home.scss", "./src/home/home.js"],
        'signin/signin': ["./src/signin/signin.scss", "./src/signin/signin.js"],
        'registration/registration': ["./src/registration/registration.scss", "./src/registration/registration.js"],
        'profile/profile': ["./src/profile/profile.scss", "./src/profile/profile.js"],
        'about/about': ["./src/about/about.scss", "./src/about/about.js"]
    },
    output: {
        filename: "[name].min.js",
        publicPath: "/",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader", options: { sourceMap: true } },
                        { loader: "postcss-loader", options: { sourceMap: true } },
                        { loader: "sass-loader", options: { sourceMap: true } }
                    ]
                })
            }, {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: { interpolate: "require" }
                }
            },
            {
                test: /\.(ico|jpg|jpeg|gif|webp)(\?.*)?$/,
                loader: "file-loader",
                options: {
                    name: "assets/[name].[hash:8].[ext]"
                }
            },
            {
                test: /\.(otf|ttf|png|svg|woff|woff2)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "assets/[name].[hash:8].[ext]"
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "src/common/img", to: "common/img" },
            { from: "src/fonts", to: "fonts" }
        ]),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            chunks: ['home/home'],
            filename: path.resolve(__dirname, "dist/home/index.html"),
            template: path.resolve(__dirname, "src/home/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['signin/signin'],
            filename: path.resolve(__dirname, "dist/signin/index.html"),
            template: path.resolve(__dirname, "src/signin/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['registration/registration'],
            filename: path.resolve(__dirname, "dist/registration/index.html"),
            template: path.resolve(__dirname, "src/registration/index.html")
        }), 
        new HtmlWebpackPlugin({
            chunks: ['profile/profile'],
            filename: path.resolve(__dirname, "dist/profile/index.html"),
            template: path.resolve(__dirname, "src/profile/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['about/about'],
            filename: path.resolve(__dirname, "dist/about/index.html"),
            template: path.resolve(__dirname, "src/about/index.html")
        })    
    ]
};