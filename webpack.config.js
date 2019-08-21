var path = require('path');

module.exports = {
    entry: {
        Home: './src/index.js',
        SectionCenterTitleDescription: './src/types/SectionCenterTitleDescription.js',
        SectionCenterTitleBlank: './src/types/SectionCenterTitleBlank.js',
        SectionCenterBlank: './src/types/SectionCenterBlank.js',
        SectionCenterImages: './src/types/SectionCenterImages.js',
        SectionCenterLeftBottomTitle: './src/types/SectionCenterLeftBottomTitle.js',
        SectionCenterLeftTopTitleCenterDescription: './src/types/SectionCenterLeftTopTitleCenterDescription.js'
    },
    output: {
        path: path.resolve(__dirname, 'types'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ]
    },
};
