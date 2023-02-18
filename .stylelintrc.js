/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Configurations for Stylelint.
 * @see https://stylelint.io
 * @see https://stylelint.io/user-guide/rules
 * @see https://github.com/stylelint/stylelint-config-standard
 */
module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-prettier"],
  overrides: [
    {
      files: ["*.less"],
      plugins: ["stylelint-less"],
      customSyntax: "postcss-less",
      rules: {
        "at-rule-no-unknown": null,
        "color-no-invalid-hex": true,
        "less/color-no-invalid-hex": true,
      },
    },
    {
      files: ["*.scss"],
      extends: ["stylelint-config-standard-scss"],
    },
  ],
};
