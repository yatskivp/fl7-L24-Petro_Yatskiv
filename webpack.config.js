const webpack = require('webpack');
module.exports = {
    context: __dirname + "/js",
    entry: "./module-comm",
    output: {
        filename: "bundle.js"
    },
    watch:true
}