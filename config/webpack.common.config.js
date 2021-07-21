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
			{
				test: /.(png|jpg|jpeg|svg|gif)$/i,
				use: [
					{
						loader: 'file-loader', // ảnh được config trong js + css url sẽ được xuất ra
						options: {
							name: 'images/[name].[ext]',
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
