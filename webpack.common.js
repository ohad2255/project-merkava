const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.scss", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: { sourceMap: true }
          }, {
            loader: "sass-loader",
            options: { sourceMap: true }
          }]
        })
      }, {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: { interpolate: "require" }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    })
  ],
};