// where is the entry? where is the output?

const path = require('path');

// path should be absolute.
module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, 'public'),
        filename : 'bundle.js'
    }
};