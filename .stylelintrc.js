/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Stylelint configurations.
 * @see https://stylelint.io
 * @see https://stylelint.io/user-guide/rules
 * @see https://github.com/stylelint/stylelint-config-standard
 */
module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "color-hex-case": "lower",
    "comment-empty-line-before": null,
    "selector-pseudo-element-colon-notation": "single",
  },
};
