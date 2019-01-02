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
            }
        ]
    },
    mode: 'development',
    devServer:{
        contentBase: path.join(__dirname,'public'),
        port:4000,
        watchContentBase:true,
        open:true
    }
};