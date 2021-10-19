<p align="center"><a href="https://www.nordtheme.com" target="_blank"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/develop/assets/images/nord/repository-hero.svg?sanitize=true"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/nord/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://www.nordtheme.com/docs"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Docs&colorA=4c566a&colorB=88c0d0&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI%2BCiAgICA8cGF0aCBmaWxsPSIjZDhkZWU5IiBkPSJNMTMuNzQ2IDIuODEzYS42Ny42NyAwIDAgMC0uNTU5LS4xMzNMOCAzLjg0OGwtNS4xODgtMS4xOGEuNjY5LjY2OSAwIDAgMC0uNTcuMTMzLjY3Ny42NzcgMCAwIDAtLjI0Mi41MzF2OC4xMzNjLS4wMDguMzIuMjEuNTk4LjUyLjY2OGw1LjMzMiAxLjE5OWguMjk2bDUuMzMyLTEuMmEuNjY4LjY2OCAwIDAgMCAuNTItLjY2N1YzLjMzMmEuNjU5LjY1OSAwIDAgMC0uMjU0LS41MnpNMy4zMzIgNC4xNjhsNCAuODk4djYuNzY2bC00LS44OTh6bTkuMzM2IDYuNzY2bC00IC44OThWNS4wNjZsNC0uODk4em0wIDAiLz4KPC9zdmc%2BCg%3D%3D"/></a></p>

<p align="center">Changelog for <a href="https://github.com/arcticicestudio/nord" alt="Nord">Nord</a>.</p>

# 0.2.0

![Release Date: 2016-11-22](https://img.shields.io/badge/Release_Date-2016--11--22-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord/projects/3) [![Milestone](https://img.shields.io/badge/Milestone-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord/milestone/2)

> Detailed information about features and the project can be found in the [project documentation][ghio-docs].

## Improvements

### Color Swatches

The "Adobe Photoshop Color Palette" (`nord.ase`) is now fully compatible to Adobe Photoshop CS6. The previous file was created using [Gpick][gpick] and has been recreated using [Adobe Photoshop CS6][adobe-photoshop] to be fully compatible with the vendor specification. (#5, 30ae2f4b)

### Documentation

❯ Switched the color definitions for `nord8` and `nord14`. The accent color `nord8` is now used for methods and functions while strings and attribute values are now colored by `nord14` instead. This design has already been implemented in all port projects before, but is now officially documented with this release version. (#1, 2a95e4c0)

❯ Switched the color of punctuations and variables / constants. The `nord4` color is now used for variables and constants while punctuations are now colored by `nord6` instead. This design has also already been implemented in all port projects before, but is now officially documented with this release version. (#2, f8231acd)

❯ `nord13` is now used to colorize regular expressions. (#3, adfcac5c)

❯ Added new SVG variations of the color palette components. These can be used for showcases or any kind of branding concepts. (78ef70b8)

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-component-polar-night.svg"/></p>

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-component-snow-storm.svg"/></p>

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-component-frost.svg"/></p>

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-component-aurora.svg"/></p>

#### Port Projects

❯ Added new official port projects. (eacf9078, 51f46d1b, d51a995b)

[![Nord Eclipse Syntax][assets-port-banner-eclipse-syntax]][gh-repo-nord-eclipse-syntax]

[![Nord gedit][assets-port-banner-gedit]][gh-repo-nord-gedit]

[![Nord Java][assets-port-banner-java]][gh-repo-nord-java]

[![Nord Tilix][assets-port-banner-tilix]][gh-repo-nord-tilix]

## Tasks

### Toolbox

❯ Added [Travis CI][ci-travisci] and [Circle CI][ci-circleci] configurations. (#4, 00beff7d)

❯ Added npm registry badges to show the latest published version and amount of downloads. (2c061e15)

# 0.1.0

![Release Date: 2016-09-04](https://img.shields.io/badge/Release_Date-2016--09--04-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord/projects/2) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord/milestone/1)

> Detailed information about features and the project can be found in the [project documentation][ghio-docs].

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-overview.svg" alt="Nord Palette Overview"/></p>

## Features

❯ Added the <img src="http://sass-lang.com/favicon.ico" width=16 height=16 /> [Sass][sass] sources `nord.scss` and the `template-css.scss` CSS template which can be compiled to `nord.css` with [Gulp][gulp] by running `gulp compile-css-template`. (6106be79)

❯ Added the Sass documentation using <img src="http://sassdoc.com/favicon.png" width=16 height=16 /> [Sassdoc][sassdoc] which can be compiled to a static HTML documentation via [Gulp][gulp] by running `gulp sassdoc`. (ab2a6b45 and 133c597c)

❯ Added the <img src="http://lesscss.org/public/ico/favicon.ico" width=16 height=16 /> [Less][less] source `nord.less`. (dc568bb2)

❯ Added the Less source documentation using the [KSS][kss] documentation syntax. Information about the generation of a styleguide can be found in the [official KSS documentation][kss-doc-styleguide].

❯ Added various native color swatches:

![][assets-color-swatch]

- `.aco` - [Adobe Photoshop][adobe-photoshop] Palette
- `.ase` - [Adobe Swatch Exchange][adobe-help-color-swatches]
- `.gpa` - [Gpick][gpick] Palette
- `.gpl` - [GIMP][gimp-doc-color-palette], [Inkscape][inkscape-wiki-color-palette] and [Krita][krita-doc-color-palette] Palette
- `.mtl` - Alias and WaveFront Material

# Project Initialization

![Project Initialization: 2016-09-04](https://img.shields.io/badge/Project_Initialization-2016--09--04-88C0D0.svg?style=flat-square)

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/banner-footer-mountains.svg" /></p>

<p align="center">Copyright &copy; 2016-present Arctic Ice Studio</p>

<p align="center"><a href="https://github.com/arcticicestudio/nord/blob/develop/LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-5E81AC.svg?style=flat-square"/></a> <a href="https://creativecommons.org/licenses/by-sa/4.0"><img src="https://img.shields.io/badge/License-CC_BY--SA_4.0-5E81AC.svg?style=flat-square"/></a></p>

[adobe-help-color-swatches]: https://helpx.adobe.com/illustrator/using/using-creating-swatches.html
[adobe-photoshop]: http://adobe.com/products/photoshop
[apple-macos-design-guidelines-color]: https://developer.apple.com/macos/human-interface-guidelines/visual-design/color
[assets-color-swatch]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/icon-color-swatch.svg
[assets-port-banner-eclipse-syntax]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-eclipse-syntax-banner.svg
[assets-port-banner-gedit]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-gedit-banner.svg
[assets-port-banner-java]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-java-banner.svg
[assets-port-banner-tilix]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-tilix-banner.svg
[ci-circleci]: https://circleci.com/gh/arcticicestudio/nord
[ci-travisci]: https://travis-ci.org/arcticicestudio/nord
[gh-repo-nord-eclipse-syntax]: https://github.com/arcticicestudio/nord-eclipse-syntax
[gh-repo-nord-gedit]: https://github.com/arcticicestudio/nord-gedit
[gh-repo-nord-java]: https://github.com/arcticicestudio/nord-java
[gh-repo-nord-tilix]: https://github.com/arcticicestudio/nord-tilix
[ghio-docs]: https://arcticicestudio.github.io/nord
[gimp-doc-color-palette]: https://docs.gimp.org/en/gimp-concepts-palettes.html
[gpick]: http://gpick.org
[gulp]: http://gulpjs.com
[inkscape-wiki-color-palette]: http://wiki.inkscape.org/wiki/index.php/ColorPalette
[krita-doc-color-palette]: https://docs.krita.org/Palette
[kss]: http://warpspire.com/kss
[kss-doc-styleguide]: http://warpspire.com/kss/styleguides
[less]: http://lesscss.org
[sass]: http://sass-lang.com
[sassdoc]: http://sassdoc.com
