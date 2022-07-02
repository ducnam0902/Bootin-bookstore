const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    alias: {
      "@bootin": path.join(__dirname, "..", "/src"),
      "@icon": path.resolve(__dirname, "./node_modules", "eleganticons"),
    },
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "public/index.html"),
    }),
  ],
  logLevel: "silent",
};
