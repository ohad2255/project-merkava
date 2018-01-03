const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: ["./src/index.scss", "./src/index.js"],
    home: ["./src/home/home.scss", "./src/home/home.js"],
    about: ["./src/about/about.scss", "./src/about/about.js"],
  },
  output: {
    filename: "[name].min.js",
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
          name: "assets/[name].[hash:8].[ext]",
        },

      },
      {
        test: /\.(otf|ttf|png|svg|woff|woff2)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "src/img", to: "img" }]),
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    }),
    new HtmlWebpackPlugin({
      chunks: ['home'],
      filename: path.resolve(__dirname, "dist/home/index.html"),
      template: path.resolve(__dirname, "src/home/index.html")
    }),
    new HtmlWebpackPlugin({
        chunks: ['about'],
        filename: path.resolve(__dirname, "dist/about/index.html"),
        template: path.resolve(__dirname, "src/about/index.html")
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      test: /\.js$/
    })
  ],
};