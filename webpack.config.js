const path = require('path');

module.exports = {
    entry: './src/app/app.js',
    output:{
        path: path.join(__dirname,'public/js'),
        filename: 'app.js'
    },
    module:{
        rules: [
            {
                loader:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use:['style-loader','css-loader','sass-loader'],
                test:/\.scss$/,
                exclude: /node_modules/
            },
            {
                loader:'file-loader',
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                options: {
                    name:'[name].[ext]',
                    limit:8000
                }
            }
        ]
    },
    mode: 'development',
    devServer:{
        contentBase: path.join(__dirname,'public'),
        port:3000,
        watchContentBase:true,
        open:true
    }
};