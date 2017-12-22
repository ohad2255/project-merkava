const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    index: ["./src/index.scss", "./src/index.js"]
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
        test: /\.(png|svg|woff|woff2)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      test: /\.js$/
    })
  ],
};