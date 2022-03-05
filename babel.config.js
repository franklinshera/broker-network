module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          rootPathPrefix: "@app",
          rootPathSuffix: "src",
        },
      ],
    ],
    env: {
      production: {
        plugins: [
          [
            "babel-plugin-root-import",
            {
              rootPathPrefix: "@app",
              rootPathSuffix: "src",
            },
          ],
        ],
      },
    },
  };
};
