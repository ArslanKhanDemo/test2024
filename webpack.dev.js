const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './index.js', // Entry point of your Node.js application
    target: 'node', // Specifies the target environment (Node.js)
    output: {
        path: path.resolve(__dirname, 'dev-build'), // Output directory
        filename: 'main.js', // Output file name
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader', // Use babel to transpile JavaScript files
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        // DefinePlugin allows you to create global constants which can be configured at compile time
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    optimization: {
        minimize: true, // Minimize output bundle
    },
    // Resolve modules using Node.js built-in module resolution
    resolve: {
        extensions: ['.js'],
    },
    // Exclude bundling node_modules dependencies
    externals: [
        /^(?!\.|\/).+/i, // Exclude any dependencies from being bundled
    ],
};
