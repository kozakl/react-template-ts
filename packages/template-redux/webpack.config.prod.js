const DefinePlugin       = require('webpack').DefinePlugin,
      UglifyJsPlugin     = require('webpack').optimize.UglifyJsPlugin,
      RestOptimizePlugin = require('rest-optimize-webpack-plugin');

module.exports = {
    entry: './src/Main.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                use: ['url-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new RestOptimizePlugin(),
        new UglifyJsPlugin()
    ]
};
