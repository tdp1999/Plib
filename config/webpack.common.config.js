const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = true;

module.exports = {
	devtool: 'source-map',
	mode: devMode ? 'development' : 'production',
	entry: {
		index: './src/index.js',
		styles: './src/style.scss',
	},
	// output: {
	//    path: path.resolve(__dirname, '../dist'),
	//    filename: '[name].js'
	// },
	module: {
		rules: [
			{
				test: /.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin()],
};
