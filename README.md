<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-logo-banner.svg"/></p>

<p align="center"><img src="https://cdn.travis-ci.org/images/favicon-c566132d45ab1a9bcae64d8d90e4378a.svg" width=24 height=24/> <a href="https://travis-ci.org/arcticicestudio/nord"><img src="https://img.shields.io/travis/arcticicestudio/nord/develop.svg"/></a> <img src="https://circleci.com/favicon.ico" width=24 height=24/> <a href="https://circleci.com/gh/arcticicestudio/nord"><img src="https://circleci.com/gh/arcticicestudio/nord.svg?style=shield&circle-token=8945e0a295af1d51d224daf2a800eb4be8b9589d"/></a> <img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord.svg"/></a> <a href="https://github.com/arcticicestudio/nord/releases/latest"><img src="https://img.shields.io/badge/pre--release---_-blue.svg"/></a> <img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/v/nord.svg"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dt/nord.svg"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dm/nord.svg"/></a></p>

<p align="center">A arctic, north-bluish color palette.</p>

<p align="center">Created for the clean- and minimal flat design pattern to achieve a optimal focus and readability for code syntax highlighting and UI.
It consists of a total of sixteen, carefully selected, dimmed pastel colors for a eye-comfortable, but yet colorful ambiance.</p>

---

The color palette it divided into four named components to represent the different color effects.

![Nord Palette Overview](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-overview.svg)

Nord colors are numbered from `nord0` to `nord15` where each component contains a different amount of colors:  
  1. **Polar Night** `nord0` - `nord3`  
  2. **Snow Storm** `nord4` - `nord6`  
  3. **Frost** `nord7` - `nord10`  
  4. **Aurora** `nord11` - `nord15`  

This naming convention allows an uncomplicated use for terminals and preserves the compatibility to similar projects like [base16](http://chriskempson.com/projects/base16).

## Usage
To show a list of all available [Gulp][gulp] tasks run `gulp` or `gulp help`.

### CSS
The [CSS specification](https://www.w3.org/TR/css-variables) supports the usage of primitive value types to define custom properties which can be used to create e.g. color variables.  
Nord provides the `template-css.scss` template file to compile a `nord.css` stylesheet.

The generated file contains all Nord color variables prefixed with `--` inside the `:root` pseudo-class.  
The `:root` pseudo-class represents an element that is the root of the document.  
This is always the HTML (`<html>`) element which allows to use the Nord color variables for the whole document.

The `nord.css` stylesheet can be compiled via [Gulp][gulp]:  
```sh
npm install
gulp compile-css-template
```

### <img src="http://sass-lang.com/favicon.ico" width=16 height=16 /> Sass
Copy the `nord.scss` file into your project and import it in your [Sass](http://sass-lang.com) files:
```css
@import "nord";
```
The `.scss` file extension is optional.

#### <img src="http://sassdoc.com/favicon.png" width=16 height=16 /> SassDoc
Nord Sass sources are documented using the [SassDoc](http://sassdoc.com) documentation syntax which can be compiled to a HTML documentation via [Gulp][gulp]:  
```sh
npm install
gulp sassdoc
```
The Sassdoc theme can be changed by editing the `.sassdocrc` configuration file.

### <img src="http://lesscss.org/public/ico/favicon.ico" width=16 height=16/> LESSCSS
Copy the `nord.less` file into your project and import it in your [LESSCSS](http://lesscss.org) files:  
```css
@import "nord";
```
Information about how the `@import` statement handles imports with different file extensions can be found in the [official LESSCSS documentation](http://lesscss.org/features/#import-directives-feature).

#### KSS
Nord LESSCSS sources are documented using the [KSS](http://warpspire.com/kss) documentation syntax.  
Information about the generation of a styleguide can be found in the [official KSS documentation](http://warpspire.com/kss/styleguides).

### <img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/icon-color-swatch.svg"/> Color Swatches
Nord is available in various native formats:
  - `.aco` Adobe Photoshop Palette
  - `.ase` Adobe Swatch Exchange
  - `.gpa` Gpick Palette
  - `.gpl` GIMP/Inkscape/CinePaint/Krita Palette
  - `.mtl` Alias/WaveFront Material

A list of detailed information about each file format can be found [here](http://www.selapa.net/swatches/colors/fileformats.php).

## Port Projects
[![Nord Atom Syntax](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-nord-atom-syntax.svg)](https://atom.io/themes/nord-atom-syntax)  
[![Nord Atom UI](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-nord-atom-ui.svg)](https://atom.io/themes/nord-atom-ui)  
[![Nord Eclipse Syntax](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-eclipse-syntax-banner.svg)](https://github.com/arcticicestudio/nord-eclipse-syntax)  
[![Nord gedit](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-nord-gedit.svg)](https://github.com/arcticicestudio/nord-gedit)  
[![Nord IntelliJ IDEA Syntax](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-nord-intellij-idea-syntax.svg)](https://github.com/arcticicestudio/nord-intellij-idea-syntax)  
[![Nord Java](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-java-banner.svg)](https://github.com/arcticicestudio/nord-java)  
[![Nord Notepad++](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-nord-notepadplusplus.svg)](https://github.com/arcticicestudio/nord-notepadplusplus)  
[![Nord Terminix](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-terminix-banner.svg)](https://github.com/arcticicestudio/nord-terminix)  
[![Nord Vim](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-nord-vim.svg)](https://github.com/arcticicestudio/nord-vim)

## Forks
  - [Nordisk](https://github.com/kamwitsta/nordisk) by @kamwitsta

## Development
[![](https://img.shields.io/badge/Changelog-0.2.0-blue.svg)](https://github.com/arcticicestudio/nord/blob/v0.2.0/CHANGELOG.md) [![](https://img.shields.io/badge/Workflow-gitflow_Branching_Model-blue.svg)](http://nvie.com/posts/a-successful-git-branching-model) [![](https://img.shields.io/badge/Versioning-ArcVer_0.8.0-blue.svg)](https://github.com/arcticicestudio/arcver)

### Contribution
Please report issues/bugs, feature requests and suggestions for improvements to the [issue tracker](https://github.com/arcticicestudio/nord/issues).

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-footer-mountains.svg" /></p>

<p align="center"> <img src="http://arcticicestudio.com/favicon.ico" width=16 height=16/> Copyright &copy; 2016 Arctic Ice Studio</p>

<p align="center"><a href="http://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg"/></a> <a href="https://creativecommons.org/licenses/by-sa/4.0"><img src="https://img.shields.io/badge/License-CC_BY--SA_4.0-blue.svg"/></a></p>

[gulp]: http://gulpjs.com
