const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/TypeScript/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "./src/TypeScript")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "SiteFrontendTSBundle.js",
    path: path.resolve(__dirname, "./public/scripts"),
  },
  mode: "production",
};
