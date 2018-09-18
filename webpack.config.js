const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
	entry: __dirname + '/js/index.jsx',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(png|jpg|svg|gif|mp4|mov)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '/assets/[name]-[hash:8].[ext]'
					}
				}]
			},
			{
				test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	devServer: {
		publicPath: '/',
		contentBase: __dirname + '/build',
		port: 5000,
		historyApiFallback: {
			index: 'index.html'
		}
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './index.html', to: './index.html' }
		])
	]
}

module.exports = config