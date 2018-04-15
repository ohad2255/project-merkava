const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'common/common': ["./src/common/common.scss", "./src/common/common.js"],
        'home/home': ["./src/home/home.scss", "./src/home/home.js"],
        'signin/signin': ["./src/signin/signin.scss", "./src/signin/signin.js"],
        'registration/registration': ["./src/registration/registration.scss", "./src/registration/registration.js"],
        'profile/profile': ["./src/profile/profile.scss", "./src/profile/profile.js"],
        'about/about': ["./src/about/about.scss", "./src/about/about.js"],
        'green-rechesh/green-rechesh': ["./src/green-rechesh/green-rechesh.scss", "./src/green-rechesh/green-rechesh.js"],
        'q-and-a/q-and-a': ["./src/q-and-a/q-and-a.scss", "./src/q-and-a/q-and-a.js"],
        'contact-us/contact-us': ["./src/contact-us/contact-us.scss", "./src/contact-us/contact-us.js"],
        'dictionary/dictionary': ["./src/dictionary/dictionary.scss", "./src/dictionary/dictionary.js"],
        'sapakim/sapakim': ["./src/sapakim/sapakim.scss", "./src/sapakim/sapakim.js"],
        'mepharsemim/mepharsemim': ["./src/mepharsemim/mepharsemim.scss", "./src/mepharsemim/mepharsemim.js"],
        'job-owners/job-owners': ["./src/job-owners/job-owners.scss", "./src/job-owners/job-owners.js"],
        'bids/bids': ["./src/bids/bids.scss", "./src/bids/bids.js"],
        'search-results/search-results': ["./src/search-results/search-results.scss", "./src/search-results/search-results.js"],
        'regulation/regulation': ["./src/regulation/regulation.scss", "./src/regulation/regulation.js"]
    },
    output: {
        filename: "[name].min.js",
        publicPath: "/",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
    alias: {
           handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
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
                test: /\.(otf|ttf|png|svg|woff|woff2|eot)(\?.*)?$/,
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
        }),
        new HtmlWebpackPlugin({
            chunks: ['green-rechesh/green-rechesh'],
            filename: path.resolve(__dirname, "dist/green-rechesh/index.html"),
            template: path.resolve(__dirname, "src/green-rechesh/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['q-and-a/q-and-a'],
            filename: path.resolve(__dirname, "dist/q-and-a/index.html"),
            template: path.resolve(__dirname, "src/q-and-a/index.html")
        }), 
        new HtmlWebpackPlugin({
            chunks: ['contact-us/contact-us'],
            filename: path.resolve(__dirname, "dist/contact-us/index.html"),
            template: path.resolve(__dirname, "src/contact-us/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['dictionary/dictionary'],
            filename: path.resolve(__dirname, "dist/dictionary/index.html"),
            template: path.resolve(__dirname, "src/dictionary/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['sapakim/sapakim'],
            filename: path.resolve(__dirname, "dist/sapakim/index.html"),
            template: path.resolve(__dirname, "src/sapakim/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['mepharsemim/mepharsemim'],
            filename: path.resolve(__dirname, "dist/mepharsemim/index.html"),
            template: path.resolve(__dirname, "src/mepharsemim/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['job-owners/job-owners'],
            filename: path.resolve(__dirname, "dist/job-owners/index.html"),
            template: path.resolve(__dirname, "src/job-owners/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['bids/bids'],
            filename: path.resolve(__dirname, "dist/bids/index.html"),
            template: path.resolve(__dirname, "src/bids/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['search-results/search-results'],
            filename: path.resolve(__dirname, "dist/search-results/index.html"),
            template: path.resolve(__dirname, "src/search-results/index.html")
        }),
        new HtmlWebpackPlugin({
            chunks: ['regulation/regulation'],
            filename: path.resolve(__dirname, "dist/regulation/index.html"),
            template: path.resolve(__dirname, "src/regulation/index.html")
        }),      
    ]
};