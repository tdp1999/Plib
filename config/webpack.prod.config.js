const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common.config');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(webpackBaseConfig, {
	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
	},
	plugins: [
		new CompressionPlugin({
			test: /\.(html|css|js|ttf|woff|woff2)(\?.*)?$/i, // only compressed html/css/js, skips compressing sourcemaps etc
			filename: '[path][base].gz',
			minRatio: 0.6,
		}),
		new ImageminPlugin({
			test: 'images/*/*.svg',
			svgo: {},
		}),
		new ImageminPlugin({
			test: 'images/*/*.png',
			optipng: {
				optimizationLevel: 9,
			},
			pngquant: {
				quality: '95-100',
			},
		}),
		new ImageminPlugin({
			test: 'images/*/*.jpg',
			maxFileSize: 10000, // Only apply this one to files equal to or under 10kb
			jpegtran: { progressive: false },
		}),
		new ImageminPlugin({
			test: 'images/*/*.jpg',
			minFileSize: 10000, // Only apply this one to files over 10kb
			jpegtran: { progressive: true },
		}),
	],
});
