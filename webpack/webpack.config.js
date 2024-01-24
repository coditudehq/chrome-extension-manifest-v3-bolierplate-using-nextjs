const path = require("path");
const
  CopyPlugin
    = require("copy-webpack-plugin");
module.exports = {
  entry: {
    background: "./src/scripts/background.ts",
    contentScript: "./src/scripts/content.ts"
  },

  output: {
    path: path.resolve(__dirname, "../extensions"),
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],

  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("extensions"),
        },
      ],
    }),
  ],

  resolve: {
    extensions: [".ts", ".js", "tsx"],
  },
};
