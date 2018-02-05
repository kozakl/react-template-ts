const RestOptimize = require('./tools/plugins/RestOptimize');

module.exports = {
    entry: './src/Main.tsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    //devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]__[hash:base64:10]'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new RestOptimize()
    ]
};
