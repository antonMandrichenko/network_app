const {
  TsConfigPathsPlugin,
  CheckerPlugin,
} = require('awesome-typescript-loader')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.mjs', '.ts', '.js', '.json'],
    plugins: [new TsConfigPathsPlugin()],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CheckerPlugin()],
}
