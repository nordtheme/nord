<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-logo-banner.svg"/></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord.svg"/></a> <img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/v/nord.svg"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dt/nord.svg"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dm/nord.svg"/></a></p>

---

# 0.2.0 (2016-11-22)
## Features
### Project Assets
Added new SVG variations of the color palette components.  
Can be used for showcases or any kind of branding concepts. (@arcticicestudio, 78ef70b8)

![Polar Night](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-component-polar-night.svg) ![Snow Storm](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-component-snow-storm.svg)
![Frost](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-component-frost.svg) ![Aurora](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-component-aurora.svg)

### Toolbox
Created [Travis CI](https://travis-ci.org) (`.travis.yml`) and [Circle CI](https://circleci.com)  (`circle.yml`) configuration files for continuous builds against the Gulp tasks `compile-css-template` and `sassdoc`. (@arcticicestudio, #4, 00beff7d)

## Improvements
### Native Formats
The "Adobe Photoshop Color Palette" [`nord.ase`](https://github.com/arcticicestudio/nord/blob/develop/src/native/nord.ase) is now fully compatible to Adobe Photoshop CS6.  
The original file has been created via [Gpick](http://gpick.org) and has been recreated using [Adobe Photoshop CS6](http://www.adobe.com/products/photoshop.html) to be fully compatible to the vendor format. (@arcticicestudio, #5, 30ae2f4b)

### Design Documentation
Switched the color definitions for `nord8` and `nord14`.  
The accent color `nord8` is now used for methods and functions while strings and attribute values are now colored by `nord14` instead.
This is design has already been implemented in all port projects before, but is now officially stated with this release version. (@arcticicestudio, #1, 2a95e4c0)

Switched the color of punctuations and variables/constants.  
The `nord4` color is now used for variables and constants while punctuations are now colored by `nord6` instead.  
This design has also already been implemented in all port projects before, but is now officially stated with this release version. (@arcticicestudio, #2, f8231acd)

`nord13` is now used to colorize all kind of regular expressions. (@arcticicestudio, #3, adfcac5c)

### Project Documentation
Added new official [port projects](https://github.com/arcticicestudio/nord#port-projects). (@arcticicestudio, eacf9078, 51f46d1b, d51a995b)  
[![Nord Eclipse Syntax](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-eclipse-syntax-banner.svg)](https://github.com/arcticicestudio/nord-eclipse-syntax)  
[![Nord gedit](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-nord-gedit.svg)](https://github.com/arcticicestudio/nord-gedit)  
[![Nord Java](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-java-banner.svg)](https://github.com/arcticicestudio/nord-java)  
[![Nord Terminix](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-terminix-banner.svg)](https://github.com/arcticicestudio/nord-terminix)  

Added [NPM](https://www.npmjs.com) registry badges to show the latest published version and amount of downloads. (@arcticicestudio, 2c061e15)
<img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/v/nord.svg"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dt/nord.svg"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dm/nord.svg"/></a>

# 0.1.0 (2016-09-04)
![Nord Palette Overview](https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-overview.svg)

## Features
### <img src="http://sass-lang.com/favicon.ico" width=16 height=16 /> Sass
  - Implemented the `nord.scss` stylesheet
  - Implemented the `template-css.scss` stylesheet.  
    This template can be compiled to a `nord.css` stylesheet via [Gulp][gulp]:
    ```sh
    npm install
    gulp compile-css-template
    ```

#### <img src="http://sassdoc.com/favicon.png" width=16 height=16 /> Sassdoc
Nord Sass sources are documented using the [Sassdoc][sassdoc] documentation syntax which can be compiled to a HTML documentation via [Gulp][gulp]:  
```sh
npm install
gulp sassdoc
```
The Sassdoc theme can be changed by editing the `.sassdocrc` configuration file.

### <img src="http://lesscss.org/public/ico/favicon.ico" width=16 height=16 /> LESSCSS
  - Implemented the `nord.less` stylesheet

#### KSS
Nord LESSCSS sources are documented using the [KSS](http://warpspire.com/kss) documentation syntax.  
Information about the generation of a styleguide can be found in the [official KSS documentation](http://warpspire.com/kss/styleguides).

### ![][icon-color-swatch] Color Swatches
Added various native color palette files: 
  - **Adobe Photoshop**: `nord.aco` (binary)
  - **Adobe Swatch Exchange**: `nord.ase`  (binary)
  - **Gpick Palette**: `nord.gpa`  (binary)
  - **GIMP/Inkscape/CinePaint/Krita Palette**:`nord.gpl`
  - **Alias/WaveFront Material**: `nord.mtl`

# 0.0.0 (2016-09-04)
**Project Initialization**

[icon-color-swatch]: https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/icon-color-swatch.svg
[sassdoc]: http://sassdoc.com
[gulp]: http://gulpjs.com
