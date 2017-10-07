<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-logo-banner.svg"/></p>

<p align="center"><img src="https://cdn.travis-ci.org/images/favicon-c566132d45ab1a9bcae64d8d90e4378a.svg" width=24 height=24/> <a href="https://travis-ci.org/arcticicestudio/nord"><img src="https://img.shields.io/travis/arcticicestudio/nord/develop.svg?style=flat-square"/></a> <img src="https://circleci.com/favicon.ico" width=24 height=24/> <a href="https://circleci.com/gh/arcticicestudio/nord"><img src="https://img.shields.io/circleci/project/github/arcticicestudio/nord/develop.svg?style=flat-square"/></a> <img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/nord/releases/latest"><img src="https://img.shields.io/badge/pre--release---_-blue.svg?style=flat-square"/></a> <img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/v/nord.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dt/nord.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dm/nord.svg?style=flat-square"/></a></p>

<p align="center">An arctic, north-bluish color palette.</p>

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

### <img src="http://stylus-lang.com/favicon.ico" width=16 height=16 /> Stylus

Copy the [`nord.styl`][nord-stylus] file into your project and import it in your [Stylus][stylus] files by either using `@require` or `@import`:

```stylus
@require "nord";
```

Information about how the `@require` and `@import` statement handles imports with different file extensions and directory structures can be found in the [official Stylus documentation][stylus-import].

#### KSS
Nord LESSCSS- and Stylus sources are documented using the [KSS](http://warpspire.com/kss) documentation syntax.

Information about the generation of a styleguide can be found in the [official KSS documentation](http://warpspire.com/kss/styleguides).

### <img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/icon-color-swatch.svg"/> Color Swatches
Nord is available in various native formats:
  - `.aco` Adobe Photoshop Palette
  - `.ase` Adobe Swatch Exchange
  - `.clr` OSX color palette
  - `.gpa` Gpick Palette
  - `.gpl` GIMP/Inkscape/CinePaint/Krita Palette
  - `.mtl` Alias/WaveFront Material

A list of detailed information about each file format can be found [here](http://www.selapa.net/swatches/colors/fileformats.php).

## Port Projects
[![Nord Atom Syntax](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-atom-syntax-banner.svg)](https://atom.io/themes/nord-atom-syntax)  
[![Nord Atom UI](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-atom-ui-banner.svg)](https://atom.io/themes/nord-atom-ui)  
[![Nord Brackets](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-brackets-banner.svg)](https://github.com/arcticicestudio/nord-brackets)  
[![Nord Coda](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-coda-banner.svg)](https://github.com/arcticicestudio/nord-coda)  
[![Nord dircolors](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-dircolors-banner.svg)](https://github.com/arcticicestudio/nord-dircolors)  
[![Nord Eclipse Syntax](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-eclipse-syntax-banner.svg)](https://github.com/arcticicestudio/nord-eclipse-syntax)  
[![Nord Emacs](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-emacs-banner.svg)](https://github.com/arcticicestudio/nord-emacs)  
[![Nord gedit](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-gedit-banner.svg)](https://github.com/arcticicestudio/nord-gedit)  
[![Nord GNOME Terminal](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-gnome-terminal-banner.svg)](https://github.com/arcticicestudio/nord-gnome-terminal)  
[![Nord Guake](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-guake-banner.svg)](https://github.com/arcticicestudio/nord-guake)  
[![Nord Hyper](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-hyper-banner.svg)](https://github.com/arcticicestudio/nord-hyper)  
[![Nord IntelliJ IDEA Syntax](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-intellij-idea-syntax-banner.svg)](https://github.com/arcticicestudio/nord-intellij-idea-syntax)  
[![Nord iTerm2](https://cdn.rawgit.com/arcticicestudio/nord/0971858f496823fd916f3368961f16ef2c7aad1e/src/assets/nord-iterm2-banner.svg)](https://github.com/arcticicestudio/nord-iterm2)  
[![Nord Java](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-java-banner.svg)](https://github.com/arcticicestudio/nord-java)  
[![Nord Konsole](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-konsole-banner.svg)](https://github.com/arcticicestudio/nord-konsole)  
[![Nord Mintty](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-mintty-banner.svg)](https://github.com/arcticicestudio/nord-mintty)  
[![Nord PuTTY](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-putty-banner.svg)](https://github.com/arcticicestudio/nord-putty)  
[![Nord Terminal.app](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-terminal-app-banner.svg)](https://github.com/arcticicestudio/nord-terminal-app)  
[![Nord Terminator](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-terminator-banner.svg)](https://github.com/arcticicestudio/nord-terminator)  
[![Nord Termite](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-termite-banner.svg)](https://github.com/arcticicestudio/nord-termite)  
[![Nord Tilix](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-tilix-banner.svg)](https://github.com/arcticicestudio/nord-tilix)  
[![Nord tmux](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-tmux-banner.svg)](https://github.com/arcticicestudio/nord-tmux)  
[![Nord Vim](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-vim-banner.svg)](https://github.com/arcticicestudio/nord-vim)  
[![Nord Visual Studio Code](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-visual-studio-code-banner.svg)](https://github.com/arcticicestudio/nord-visual-studio-code)  
[![Nord XFCE Terminal](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-xfce-terminal-banner.svg)](https://github.com/arcticicestudio/nord-xfce-terminal)  
[![Nord Xcode](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-xcode-banner.svg)](https://github.com/arcticicestudio/nord-xcode)  
[![Nord Xresources](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-xresources-banner.svg)](https://github.com/arcticicestudio/nord-xresources)  

## Forks
  - [Nordisk](https://github.com/kamwitsta/nordisk) by @kamwitsta

## Component Cards
<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-component-polar-night.svg"/><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-component-snow-storm.svg"/><br><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-component-frost.svg"/><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-component-aurora.svg"/></p>

## Development
[![](https://img.shields.io/badge/Changelog-0.2.0-blue.svg)](https://github.com/arcticicestudio/nord/blob/v0.2.0/CHANGELOG.md) [![](https://img.shields.io/badge/Workflow-gitflow_Branching_Model-blue.svg)](http://nvie.com/posts/a-successful-git-branching-model) [![](https://img.shields.io/badge/Versioning-ArcVer_0.8.0-blue.svg)](https://github.com/arcticicestudio/arcver)

### Contribution
Please report issues/bugs, feature requests and suggestions for improvements to the [issue tracker](https://github.com/arcticicestudio/nord/issues).

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-footer-mountains.svg" /></p>

<p align="center"> <img src="http://arcticicestudio.com/favicon.ico" width=16 height=16/> Copyright &copy; 2017 Arctic Ice Studio</p>

<p align="center"><a href="http://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg"/></a> <a href="https://creativecommons.org/licenses/by-sa/4.0"><img src="https://img.shields.io/badge/License-CC_BY--SA_4.0-blue.svg"/></a></p>

[gulp]: http://gulpjs.com
[nord-stylus]: https://github.com/arcticicestudio/nord/blob/develop/src/stylus/nord.styl
[stylus]: http://stylus-lang.com
[stylus-import]: http://stylus-lang.com/docs/import.html#stylus-import
