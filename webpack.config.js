const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    return {
        context: path.join(__dirname, 'src'),
        entry: './index.js',
        output: {
            filename: devMode ? 'bundle.js' : 'bundle.[hash].js',
            path: path.join(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: devMode ? 'source-map' : '',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loaders: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.css$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: devMode
                        }
                    }, 'css-loader']
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[hash].css'
            })
        ],
        watch: false,
        devServer: {
            port: 3000
        }
    };
}