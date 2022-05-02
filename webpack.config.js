const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Output Management',
    //         // template: path.resolve(__dirname, 'src/index.html')
    //     }),
    // ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 80
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    // devtool: "source-map"
};