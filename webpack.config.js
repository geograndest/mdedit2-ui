const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    node: { fs: "empty" },
    // Two entries to generate JS file and minify JS file
    entry: {
        'bundle': './src/app/root.module.js',
        'bundle.min': './src/app/root.module.js'
    },
    output: {
        path: path.join(__dirname, "build/"),
        filename: "./js/[name].js",
        publicPath: ""
    },
    module: {
        strictExportPresence: true,
        rules: [
            // Load raw HTML files for templates
            {
                test: /\.(html)$/,
                loader: "raw-loader",
                exclude: '/node_modules/'
            },
            // Load JS files
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // Load CSS and SCSS files
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            // Load images and fonts
            {
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
        // Generates an `index.html` file with the <script> injected.
        // Clean "build" folder before build sources
        new CleanWebpackPlugin([
            'build'
        ], {
            verbose: true,
            dry: false,
            watch: true
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
            }
        ], {
            // ignore: [
            //     // Doesn't copy any files with a txt extension    
            //     '_*'
            // ],
            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: false
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: "src/index.html",
            filename: "index.html",
            excludeAssets: [/bundle\.js$/]
                // excludeAssets: [/bundle\.min\.js$/]
        }),
        // Need to exclude "bundle.js" file in HtmlWebpackPlugin and keep only "bundle.min.js"
        new HtmlWebpackExcludeAssetsPlugin(),
        // Generate separate "style.css" file
        new ExtractTextPlugin("./styles/styles.css"),
        // Beautify but don't compress "bundle.js" file
        new webpack.optimize.UglifyJsPlugin({
            exclude: /\.min\.js$/,
            compress: false,
            beautify: true,
            sourceMap: false
        }),
        // Genretate "bundle.min.js" and source map by compressing js
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            compress: true,
            beautify: false,
            sourceMap: true
        })
        // Keep for memory: load Jquery module
        // new webpack.ProvidePlugin({
        //     jQuery: 'jquery',
        //     $: 'jquery',
        //     jquery: 'jquery'
        // })
    ],
    // Generate CSS source file
    devtool: "source-map",
    // Settings of server
    devServer: {
        // inline: true,
        // contentBase: path.join(__dirname, 'build'),
        // contentBase: [path.join(__dirname, "src"), path.join(__dirname, "config")],
        // publicPath: '/',
        // host: '0.0.0.0', 
        port: 8080,
        stats: 'minimal',
        compress: true,
        historyApiFallback: true
    }
};