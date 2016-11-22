/*
+++++++++++++++++++++++++++++++++++++++++++
title     Project Gulp File               +
project   nord                            +
author    Arctic Ice Studio               +
email     development@arcticicestudio.com +
copyright Copyright (C) 2016              +
+++++++++++++++++++++++++++++++++++++++++++

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
    version: "0.2.0",
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

/*+---------+
  + Imports +
  +---------+*/
var del          = require("del");
var fs           = require("fs");
var gulp         = require("gulp-help")(require("gulp"));
var gulputil     = require("gulp-util");
var path         = require("path");
var plumber      = require("gulp-plumber");
var rename       = require("gulp-rename");
var sass         = require("gulp-sass");
var sassdoc      = require("sassdoc");

/*+-------+
  + Tasks +
  +-------+*/
/**
 * Cleans the whole build folder.
 *
 * @since 0.1.0
 */
gulp.task("clean", function() {
  del(config.build.base);
});

/**
 * Cleans the CSS build folder.
 *
 * @since 0.1.0
 */
gulp.task("clean-css", function(){
  del(config.build.css);
});

/**
 * Cleans the documentation build folder.
 *
 * @since 0.1.0
 */
gulp.task("clean-documentation", function(){
  del(config.build.sassdoc);
});

/**
 * Compiles the Sass CSS template.
 *
 * @since 0.1.0
 */
gulp.task("compile-css-template", function() {
  return gulp.src(path.join(config.src.sass, "/template-css." + config.tasks.compilation.sass.extensions.input))
    .pipe(plumber())
    .pipe(sass(config.tasks.compilation.sass.options).on("error", sass.logError))
    .pipe(rename("/nord." + config.tasks.compilation.sass.extensions.output))
    .pipe(gulp.dest(config.build.css))
});

/**
 * Shows the help.
 *
 * @since 0.1.0
 */
gulp.task("default", ["help"]);

/**
 * Creates the Sassdoc documentation.
 *
 * @since 0.1.0
 */
gulp.task("sassdoc", function () {
  return gulp.src(path.join(config.src.sass, "/**/*." + config.tasks.compilation.sass.extensions.input))
    .pipe(sassdoc())
});
