module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: './target',
        filename: "bundle.js",
    },
    devServer: {
        contentBase: ".",
        inline: "true",
        watch: "true",
        port: "8888",
        progress: "true"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    }
};