const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin  = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    module: {
      rules: [
          { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
          { test: /\.css?$/, use: ["style-loader", "css-loader"] },
          { test: /\.ts?$/, use: { loader: 'ts-loader' } },
        ],
    },
  
  plugins: [htmlWebpackPlugin]
}; 

