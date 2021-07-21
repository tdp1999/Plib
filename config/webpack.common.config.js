const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		styles: './src/styles/style.scss',
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		assetModuleFilename: 'images/[hash][ext][query]',
		// filename: '[name].js',
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
				test: /.(css|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					{
						loader: 'css-loader',
						options: {},
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
			{
				test: /.(png|jpg|jpeg|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Plib',
			// inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
	],
};
