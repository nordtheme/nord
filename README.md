<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord/develop/src/assets/nord-logo-banner.svg"/></p>

<img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> [![release](https://img.shields.io/github/release/arcticicestudio/nord.svg)](https://github.com/arcticicestudio/nord/releases/latest)

A arctic, north-bluish color palette.

Created for the clean- and minimal design pattern to achieve a optimal focus and readability for code syntax highlighting and UI.
It consists of a total of sixteen, carefully selected, dimmed pastel colors for a eye-comfortable, but yet colorful ambiance.

The color palette it divided into four named components to represent the different color effects.

![Nord Palette Overview](https://raw.githubusercontent.com/arcticicestudio/nord/develop/src/assets/nord-overview.svg)

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

### Sass
Copy the `nord.scss` file into your project and import it in your Sass files:
```css
@import "nord";
```
The `.scss` file extension is optional.

#### Sassdoc
Nord is documented using the [Sassdoc](http://sassdoc.com) documentation syntax which can be compiled to a HTML documentation via [Gulp][gulp]:  
```sh
npm install
gulp sassdoc
```
The Sassdoc theme can be changed by editing the `.sassdocrc` configuration file.

### LESSCSS
Copy the `nord.less` file into your project and import it in your LESSCSS files:  
```css
@import "nord";
```
Information about how the `@import` statement handles imports with different file extensions can be found in the [official LESSCSS documentation](http://lesscss.org/features/#import-directives-feature).

#### KSS
Nord is documented using the [KSS](http://warpspire.com/kss) documentation syntax.  
Information about the generation of a styleguide can be found in the [official KSS documentation](http://warpspire.com/kss/styleguides).

### <img src="https://raw.githubusercontent.com/arcticicestudio/nord/develop/src/assets/icon-color-swatch.svg"/> Color Swatches
Nord is available in various native formats:
  - `.ace` Adobe Photoshop Palette
  - `.ase` Adobe Swatch Exchange
  - `.gpa` Gpick Palette
  - `.gpl` GIMP/Inkscape/CinePaint/Krita Palette
  - `.mtl` Alias/WaveFront Material

## Projects
[![Nord Atom Syntax](https://raw.githubusercontent.com/arcticicestudio/nord/develop/src/assets/banner-nord-atom-syntax.svg)](https://atom.io/themes/nord-atom-syntax)  
[![Nord Atom UI](https://raw.githubusercontent.com/arcticicestudio/nord/develop/src/assets/banner-nord-atom-ui.svg)](https://atom.io/themes/nord-atom-ui)  
[![Nord IntelliJ IDEA Syntax](https://raw.githubusercontent.com/arcticicestudio/nord/develop/src/assets/banner-nord-intellij-idea-syntax.svg)](https://github.com/arcticicestudio/nord-intellij-idea-syntax)  
[![Nord Vim](https://raw.githubusercontent.com/arcticicestudio/nord/develop/src/assets/banner-nord-vim.svg)](https://github.com/arcticicestudio/nord-vim)  

## Development
[![Changelog](https://img.shields.io/badge/Changelog-v0.0.0-blue.svg)](https://github.com/arcticicestudio/nord/blob/v0.0.0/CHANGELOG.md)

### Workflow
This project follows the [gitflow](http://nvie.com/posts/a-successful-git-branching-model) branching model.

### Specifications
This project follows the [Arctic Versioning Specification (ArcVer)](https://github.com/arcticicestudio/arcver).

### Contribution
Please report issues/bugs, feature requests and suggestions for improvements to the [issue tracker](https://github.com/arcticicestudio/nord/issues).

### References
  - [Color Swatch File Formats](http://www.selapa.net/swatches/colors/fileformats.php)
  - [KSS](http://warpspire.com/kss)
  - <img src="http://lesscss.org/public/ico/favicon.ico" width=16 height=16 /> [LESSCSS](http://lesscss.org)
  - <img src="http://sass-lang.com/favicon.ico" width=16 height=16 /> [Sass](http://sass-lang.com)
  - <img src="http://sassdoc.com/favicon.png" width=16 height=16 /> [SassDoc](http://sassdoc.com)

<p align="center">![](https://raw.githubusercontent.com/arcticicestudio/nord/develop/src/assets/banner-footer-mountains.svg)</p>
---

<p align="center">
<img src="http://arcticicestudio.com/favicon.ico" width=16 height=16/> Copyright &copy; 2016 Arctic Ice Studio

[![GPL-3.0](http://www.gnu.org/graphics/gplv3-88x31.png)](http://www.gnu.org/licenses/gpl.txt) [![CC BY-SA-4.0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg)](http://creativecommons.org/licenses/by-sa/4.0)
</p>

[gulp]: http://gulpjs.com
