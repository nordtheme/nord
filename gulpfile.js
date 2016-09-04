/*
+++++++++++++++++++++++++++++++++++++++++++
title     Project Gulp File               +
project   nord                            +
version                                   +
author    Arctic Ice Studio               +
email     development@arcticicestudio.com +
copyright Copyright (C) 2016              +
+++++++++++++++++++++++++++++++++++++++++++

[Index]
  > Configuration
  > Imports
  > Tasks
      clean
      clean-css
      clean-documentation
      compile-css-template
      default

[References]
Gulp
  (http://gulpjs.com)
npmjs
  (https://www.npmjs.com)
*/

"use strict";
/*+---------------+
  + Configuration +
  +---------------+*/
var config = {
  project: {
    id: "nord",
    name: "Nord",
    version: "",
    repository: "https://github.com/arcticicestudio/nord",
    author: "Arctic Ice Studio",
    email: "development@arcticicestudio.com"
  },
  build: {
    base: "./build",
    css: "./build/css",
    sassdoc: "./build/documentation/sassdoc"
  },
  src: {
    sass: "./src/sass"
  },
  tasks: {
    compilation: {
      sass: {
        extensions: {
          input: ["scss"],
          output: "css"
        },
        options: {
          indentedSyntax: false,
          indentType: "space",
          indentWidth: 2,
          linefeed: "lf",
          outputStyle: "expanded",
          precision: 5,
          sourceComments: false
        }
      }
    }
  }
}
