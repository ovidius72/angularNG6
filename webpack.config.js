module.exports = {
    devtool: 'sourcemap',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel'},
            {test: /\.html$/, loader: 'raw'},
            //{ test: /\.styl$/, loader: 'style!css!stylus' },
            {test: /\.(sass|scss)$/, loader: 'style!css!sass'},
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};
