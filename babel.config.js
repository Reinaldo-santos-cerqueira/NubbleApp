module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		['module-resolver', {
			root: '.',
			alias: {
				'@components': './src/components',
				'@hooks': './src/hooks',
				'@screen': './src/screen',
				'@utils': './src/utils',
				'@routes': './src/routes',
				'@domain': './src/domain',
				'@theme': './src/theme',
				'@brand': './src/brand'
			}
		}]
	]
};
