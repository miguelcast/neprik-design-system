const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = ({ config, mode }) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.md$/,
    include: path.resolve(__dirname, '../'),
    use: [
      {
        loader: "html-loader"
      },
      {
        loader: "markdown-loader",
      }
    ],
  });

  // Return the altered config
  return config;
};
