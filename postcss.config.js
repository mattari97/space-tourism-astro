const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: false,
      features: {
        'custom-media-queries': true,
        'media-query-ranges': true,
        'custom-selectors': true,
      },
    }),
  ],
};
