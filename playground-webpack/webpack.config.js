const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
