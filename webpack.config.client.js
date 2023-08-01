const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
        exclude: [/node_modules/],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.svg$/, loader: 'svg-inline-loader' }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map',
    path: path.resolve(__dirname, 'dist/public'),
  },
};