/*
++++++++++++++++++++++++++++++++++++++++++++++++++++
title      stylelint Configuration                 +
project    nord                                    +
repository https://github.com/arcticicestudio/nord +
author     Arctic Ice Studio                       +
email      development@arcticicestudio.com         +
copyright  Copyright (C) 2017                      +
++++++++++++++++++++++++++++++++++++++++++++++++++++

[References]
stylelint
  https://stylelint.io
  https://stylelint.io/user-guide/rules
  https://github.com/stylelint/stylelint-config-standard
*/
module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "color-hex-case": "upper",
    "comment-empty-line-before": null,
    "selector-pseudo-element-colon-notation": "single"
  }
}
