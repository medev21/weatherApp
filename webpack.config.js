const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');

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
				loader: 'babel-loader',
				query: {
	                presets: ['@babel/preset-env', '@babel/react'],
	                plugins: ["transform-class-properties"]
	            }
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
		port: 5050,
		historyApiFallback: {
			index: 'index.html'
		}
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './index.html', to: './index.html' },
			{ from: './public/', to: './public/'},
			// { from: './public/sampleWeather.json', to: './public/sampleWeather.json'},
			{ from: './images/', to: './images/'}
		]),
		new Dotenv()
	]
}

module.exports = config