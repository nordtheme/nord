"use strict";
/*
++++++++++++++++++++++++++++++++++++++++++++++++++++
title      Nord                                    +
project    nord                                    +
version    0.2.0                                   +
repository https://github.com/arcticicestudio/nord +
author     Arctic Ice Studio                       +
email      development@arcticicestudio.com         +
copyright  Copyright (C) 2017                      +
++++++++++++++++++++++++++++++++++++++++++++++++++++

[References]
Babel
  https://babeljs.io
JSDoc
  http://usejsdoc.org
*/
/**
 * An arctic, north-bluish color palette.
 * Created for the clean- and minimal flat design pattern to achieve a optimal focus and readability for code syntax highlighting and UI.
 * It consists of a total of sixteen, carefully selected, dimmed pastel colors for a eye-comfortable, but yet colorful ambiance.
 *
 * @module nord
 * @access public
 * @version 0.2.0
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @copyright Arctic Ice Studio (C) 2017
 * @see {@link https://github.com/arcticicestudio/nord|Nord}
 */
const NORD = Object.freeze({
  /**
   * Base component color of {@link POLARNIGHT}.
   * Used for texts, backgrounds, carets and structuring characters like curly- and square brackets.
   *
   * @constant
   * @default #2E3440
   * @type {string}
   * @since 0.1.0
   */
  nord0: "#2E3440",
  /**
   * Lighter shade color of the base {@link POLARNIGHT} component color.
   * Used as a lighter background color for UI elements like status bars.
   *
   * @constant
   * @default #3B4252
   * @type {string}
   * @since 0.1.0
   * @see {@link nord0}
   */
  nord1: "#3B4252",
  /**
   * Lighter shade color of the base {@link POLARNIGHT} component color.
   * Used as line highlighting in the editor.
   * In the UI scope it may be used as selection- and highlight color.
   *
   * @constant
   * @default #434C5E
   * @type {string}
   * @since 0.1.0
   * @see {@link nord0}
   */
  nord2: "#434C5E",
  /**
   * Lighter shade color of the base {@link POLARNIGHT} component color.
   * Used for comments, invisible characters, indent- and wrap guide marker.
   * In the UI scope used as pseudo-class color for disabled elements.
   *
   * @constant
   * @default #4C566A
   * @type {string}
   * @since 0.1.0
   * @see {@link nord0}
   */
  nord3: "#4C566A",
  /**
   * Base component color of {@link SNOWSTORM}.
   * Main color for text, variables, constants and attributes.
   * In the UI scope used as semi-light background depending on the theme shading design.
   *
   * @constant
   * @default #D8DEE9
   * @type {string}
   * @since 0.1.0
   */
  nord4: "#D8DEE9",
  /**
   * Lighter shade color of the base {@link SNOWSTORM} component color.
   * Used as a lighter background color for UI elements like status bars.
   * Used as semi-light background depending on the theme shading design.
   *
   * @constant
   * @default #E5E9F0
   * @type {string}
   * @since 0.1.0
   * @see {@link nord4}
   */
  nord5: "#E5E9F0",
  /**
   * Lighter shade color of the base {@link SNOWSTORM} component color
   * Used for punctuations, carets and structuring characters like curly- and square brackets.
   * In the UI scope used as background, selection- and highlight color depending on the theme shading design.
   *
   * @constant
   * @default #ECEFF4
   * @type {string}
   * @since 0.1.0
   * @see {@link nord4}
   */
  nord6: "#ECEFF4",
  /**
   * Bluish core color of {@link FROST}.
   * Used for classes, types and documentation tags.
   *
   * @constant
   * @default #8FBCBB
   * @type {string}
   * @since 0.1.0
   */
  nord7: "#8FBCBB",
  /**
   * Bluish core accent color of {@link FROST}.
   * Represents the accent color of the color palette.
   * Main color for primary UI elements and methods/functions.
   *
   * Can be used for
   *   - Markup quotes
   *   - Markup link URLs
   *
   * @constant
   * @default #88C0D0
   * @type {string}
   * @since 0.1.0
   */
  nord8: "#88C0D0",
  /**
   * Bluish core color of {@link FROST}.
   * Used for language-specific syntactic/reserved support characters and keywords, operators, tags, units and punctuations like (semi)colons,commas and braces.
   *
   * @constant
   * @default #81A1C1
   * @type {string}
   * @since 0.1.0
   */
  nord9: "#81A1C1",
  /**
   * Bluish core color of {@link FROST}.
   * Used for markup doctypes, import/include/require statements, pre-processor statements and at-rules.
   *
   * @constant
   * @default #5E81AC
   * @type {string}
   * @since 0.1.0
   */
  nord10: "#5E81AC",
  /**
   * Colorful component color of {@link AURORA}.
   * Used for errors, git/diff deletion and linter marker.
   *
   * @constant
   * @default #BF616A
   * @type {string}
   * @since 0.1.0
   */
  nord11: "#BF616A",
  /**
   * Colorful component color of {@link AURORA}.
   * Used for annotations.
   *
   * @constant
   * @default #D08770
   * @type {string}
   * @since 0.1.0
   */
  nord12: "#D08770",
  /**
   * Colorful component color of {@link AURORA}.
   * Used for escape characters, regular expressions and markup entities.
   * In the UI scope used for warnings and git/diff changes.
   *
   * @constant
   * @default #EBCB8B
   * @type {string}
   * @since 0.1.0
   */
  nord13: "#EBCB8B",
  /**
   * Colorful component color of {@link AURORA}.
   * Main color for strings and attribute values.
   * In the UI scope used for git/diff additions and success visualizations.
   *
   * @constant
   * @default #A3BE8C
   * @type {string}
   * @since 0.1.0
   */
  nord14: "#A3BE8C",
  /**
   * Colorful component color of {@link AURORA}.
   * Used for numbers.
   *
   * @constant
   * @default #B48EAD
   * @type {string}
   * @since 0.1.0
   */
  nord15: "#B48EAD"
});

export default NORD;
