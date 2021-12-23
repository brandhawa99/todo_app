const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },

    module:{
        rules: [
            {
                test: /\.css$/i,
                
                use:[
                    {
                        loader: 'css-loader',
                        options:{
                            importLoaders: 1
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:[
                                require('tailwindcss'),
                                require('autoprefixer'),
                            ]
                        }
                    }

                ]
            }
        ]
    }
};