/*
 * Copyright (C) 2020 Hello Tham <info@hellotham.com>
 * Copyright (C) 2020 Chris Tham <chris.tham@hellotham.com>
 *
 * Project:    Rosely
 * Repository: https://github.com/hellotham/rosely
 * License:    MIT
 * References:
 *   https://stylelint.io
 *   https://stylelint.io/user-guide/rules
 *   https://github.com/stylelint/stylelint-config-standard
 */

module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "color-hex-case": "lower",
    "comment-empty-line-before": null,
    "selector-pseudo-element-colon-notation": "single"
  }
};
