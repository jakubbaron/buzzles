module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  //This seems a bit hacky, might need some investigation
  //https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  devServer: {
    historyApiFallback: true,
  }
}