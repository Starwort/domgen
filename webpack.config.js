var path = require('path');

var baseConfig = {
    entry: {
        top_app_bar: './docs/cdn/source/javascript/top_app_bar.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./docs/cdn/javascript')
    }
};

// export configuration
module.exports = baseConfig;