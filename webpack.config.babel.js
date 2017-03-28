
import path from 'path' // eslint-disable-line
import webpack from 'webpack'


const PROD = JSON.parse(process.env.PROD_ENV || '0')

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
]
const prodPlugins = plugins.concat(new webpack.optimize.UglifyJsPlugin())

export default {
  entry: [
    './builder.js',
  ],
  output: {
    filename: PROD ? 'babylon.min.js' : 'babylon.max.js',
    path: path.resolve(__dirname, 'lib/'),
    library: 'BABYLON',
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
  plugins: PROD ? prodPlugins : plugins,
}
