const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		// index: './src/index.js',
		demo: './src/scripts/index.js',
		styleDemo: './src/styles/demo.scss',
		styles: './src/styles/style.scss',
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		// filename: '[name].js',
	},
	devServer: {
		watchFiles: 'dist/*',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					{
						loader: 'css-loader',
						options: { url: false }, // Ảnh trong url css sẽ giữ nguyên url
					},
					{
						loader: 'postcss-loader',
						options: {},
					},
					{
						loader: 'sass-loader',
						options: {},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Plib',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/fonts', to: 'fonts' },
				{ from: './src/images', to: 'images' }, // Copy all image to dist, no loader
			],
		}),
		new CleanWebpackPlugin(),
	],
};
