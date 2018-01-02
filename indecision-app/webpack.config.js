// where is the entry? where is the output?

const path = require('path');

// path should be absolute.
module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module : {
        rules : [{
            loader : 'babel-loader',
            test : /.js$/,
            exclude : /node_modules/
        }]
    },
    devtool : 'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.resolve(__dirname, 'public')
    }
};

// loader