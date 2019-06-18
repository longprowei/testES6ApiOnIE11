const path = require('path');
module.exports = {
    entry: ['core-js/modules/es.promise/', './src/index.js'], // "useBuiltIns": "usage" in babelrc is not working, so direct add es.promise 
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};