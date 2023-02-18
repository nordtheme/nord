/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Configurations for Prettier.
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 * @see https://prettier.io/docs/en/options.html#parser
 * @see https://prettier.io/docs/en/plugins.html
 * @see https://github.com/un-ts/prettier/tree/master/packages/sh
 */
module.exports = {
  printWidth: 160,
  overrides: [
    {
      files: ["*.less"],
      options: {
        parser: "less",
      },
    },
    {
      files: ["*.scss"],
      options: {
        parser: "scss",
      },
    },
    {
      files: [".husky/*"],
      options: {
        parser: "sh",
      },
    },
  ],
};
