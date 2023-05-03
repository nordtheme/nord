/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the Creative Commons Attribution-ShareAlike 4.0 International license found in the license file.
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
  extends: [
    "@svengreb/eslint-config-base",
    /*
     * Enable support for projects using Prettier.
     * Note that this must always be placed after the `@svengreb/eslint-config-base` preset to take precedence, otherwise it won't prevent errors
     * due to useless and possibly conflicting rules!
     */
    "@svengreb/eslint-config-base/prettier",
  ],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "capitalized-comments": "off",
      },
    },
  ],
};
