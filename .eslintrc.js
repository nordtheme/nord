/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Configurations for ESLint.
 * @see https://eslint.org/docs/latest/use/configure
 * @see https://eslint.org/docs/latest/use/configure/#using-configuration-files
 * @see https://eslint.org/docs/latest/use/configure/#specifying-environments
 * @see https://eslint.org/docs/latest/rules
 */
module.exports = {
  root: true,
  extends: ["@arcticicestudio/eslint-config-base", "@arcticicestudio/eslint-config-base/prettier"],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "capitalized-comments": "off",
      },
    },
  ],
};
