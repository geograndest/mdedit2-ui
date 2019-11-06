const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'bundle': './src/app/root.module.js'
    },
    output: {
        path: path.join(__dirname, "build/"),
        filename: "./js/[name].js",
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader']
            },
            { // less loader for webpack
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader']
            },
            { // Load images and fonts
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    // Put fot files in "fonts" folder
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            // {outputPath}/config
            {
                from: 'src/config',
                to: 'config'
            }, {
                from: 'src/documentation',
                to: 'documentation'
            }, {
                from: 'src/img',
                to: 'img'
            }, {
                from: 'src/styles/fonts',
                to: 'styles/fonts'
            }, {
                from: 'src/php',
                to: 'php'
            }
        ], {
            ignore: [
                // Doesn't copy any files with a txt extension    
                'php_server_*.bat'
            ],
            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: false
        }),
    ],
    devServer: {
        contentBase: "dist",
        overlay: true,
        stats: {
          colors: true
        },
        port: 9000,
        compress: true,
        historyApiFallback: true
    },
    devtool: "source-map"
};