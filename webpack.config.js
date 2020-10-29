const path = require("path");


// const ROOT = path.resolve(__dirname) + "/";

// console.log(process.env.NODE_ENV)

module.exports = {
    entry: path.resolve(__dirname, "src/index.jsx") ,
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath : path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer : {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hot : true
    }
}
