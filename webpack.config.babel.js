// @flow

import path from 'path'
import webpack from 'webpack'

const WDS_PORT = 7000

const PROD = JSON.parse(process.env.PROD_ENV || '0')

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]
const prodPlugins = plugins.concat(new webpack.optimize.UglifyJsPlugin())
// not really working
export default {
  entry: [
    './index.js',
  ],
  output: {
    filename: PROD ? 'babylon.min.js' : 'babylon.max.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devtool: PROD ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
  },
  plugins: PROD ? prodPlugins : plugins,
}
