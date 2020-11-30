const path = require('path');
const resolve = dir => path.join(__dirname, dir);


module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('examples'))
        .set('@visam', resolve('packages'))
    }
}