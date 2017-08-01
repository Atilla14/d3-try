const path = require("path")

module.exports = {
  entry: "./app",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //         importLoaders: 1,
      //       }
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         sourceMap: 'inline',
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: 'css-loader!postcss-loader'
      //   })
      // },
      // {
      //   test: /\.svg$/,
      //   use: 'svg-url-loader'
      // }
    ]
  }
}