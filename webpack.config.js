const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // pubicPath:'dist'
  },
  devtool: "inline-source-map",
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: "/node_modules/" }],
  },
  resolve: {
    extensions: ["ts", "js"],
  },
};