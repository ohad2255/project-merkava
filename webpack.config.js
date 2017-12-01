const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/index.scss', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }, {
	  	test: /\.(html)$/,
		  use: {
		    loader: 'html-loader?interpolate=require',
		  }
		}
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
    	title: "Webpack Boilerplate",
    	template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}