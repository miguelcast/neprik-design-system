const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      }
    ],
  });

  storybookBaseConfig.module.rules.push({
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
  return storybookBaseConfig;
};
