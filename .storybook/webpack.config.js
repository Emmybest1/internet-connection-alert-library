const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],

  webpackFinal: async (config, {configType}) => {
    config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.slice().map((subRule) => {
          if (subRule.test instanceof RegExp && subRule.test.test('.scss')) {
            return {
              ...subRule,
              use: [
                ...subRule.use,
                {
                  loader: require.resolve('sass-resources-loader'),
                  options: {
                    resources: [path.resolve(__dirname, '../src/styles/_common.scss')],
                  },
                },
              ],
            };
          }
          return subRule;
        });
      }
      return rule;
    });
    return config;
  },
};
