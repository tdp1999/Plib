const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common.config');

module.exports = merge(webpackBaseConfig, {
	devtool: 'source-map',
	devServer: {
		watchContentBase: true,
		contentBase: './dist',
		hot: true,
	},
	target: 'web',
});
