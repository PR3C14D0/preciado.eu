const path = require('path');
const dotenv = require('dotenv-webpack');
module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, '../', 'public', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                include: path.resolve(__dirname, 'src'),
                test: /\.css$/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    plugins: [
        new dotenv()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '../', 'public'),
        },
        compress: true,
        port: 9000
    }
}