<p align="center">
  <a href="https://www.nordtheme.com" target="_blank">
    <picture>
      <source srcset="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/logos/heroes/logo-typography/dark/frostic/nord3/spaced.svg?sanitize=true" width="100%" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
      <source srcset="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/logos/heroes/logo-typography/light/frostic/nord6/spaced.svg?sanitize=true" width="100%" media="(prefers-color-scheme: dark)" />
      <img src="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/logos/heroes/logo-typography/dark/frostic/nord3/spaced.svg?sanitize=true" width="100%" />
    </picture>
  </a>
</p>

<p align="center"><a href="https://github.com/nordtheme/nord/releases/latest"><img src="https://img.shields.io/github/release/nordtheme/nord.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://www.nordtheme.com/docs"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Docs&colorA=4c566a&colorB=88c0d0&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI%2BCiAgICA8cGF0aCBmaWxsPSIjZDhkZWU5IiBkPSJNMTMuNzQ2IDIuODEzYS42Ny42NyAwIDAgMC0uNTU5LS4xMzNMOCAzLjg0OGwtNS4xODgtMS4xOGEuNjY5LjY2OSAwIDAgMC0uNTcuMTMzLjY3Ny42NzcgMCAwIDAtLjI0Mi41MzF2OC4xMzNjLS4wMDguMzIuMjEuNTk4LjUyLjY2OGw1LjMzMiAxLjE5OWguMjk2bDUuMzMyLTEuMmEuNjY4LjY2OCAwIDAgMCAuNTItLjY2N1YzLjMzMmEuNjU5LjY1OSAwIDAgMC0uMjU0LS41MnpNMy4zMzIgNC4xNjhsNCAuODk4djYuNzY2bC00LS44OTh6bTkuMzM2IDYuNzY2bC00IC44OThWNS4wNjZsNC0uODk4em0wIDAiLz4KPC9zdmc%2BCg%3D%3D"/></a></p>

<p align="center">Changelog for <a href="https://github.com/nordtheme/nord">Nord</a>.</p>

# 0.2.0

![Release Date: 2016-11-22](https://img.shields.io/badge/Release_Date-2016--11--22-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/nord/projects/3) [![Milestone](https://img.shields.io/badge/Milestone-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/nord/milestone/2)

> Detailed information about features and the project can be found in the [project documentation][ghio-docs].

## Improvements

### Color Swatches

The "Adobe Photoshop Color Palette" (`nord.ase`) is now fully compatible to Adobe Photoshop CS6. The previous file was created using [Gpick][gpick] and has been recreated using [Adobe Photoshop CS6][adobe-photoshop] to be fully compatible with the vendor format specification. (#5, 30ae2f4b)

### Documentation

❯ Switched the color definitions for `nord8` and `nord14`. The accent color `nord8` is now used for methods and functions while strings and attribute values are now colored by `nord14` instead. This design has already been implemented in all port projects before, but is now officially documented with this release version. (#1, 2a95e4c0)

❯ Switched the color of punctuations and variables / constants. The `nord4` color is now used for variables and constants while punctuations are now colored by `nord6` instead. This design has also already been implemented in all port projects before, but is now officially documented with this release version. (#2, f8231acd)

❯ `nord13` is now used to colorize regular expressions. (#3, adfcac5c)

❯ Added new SVG variations of the color palette components. These can be used for showcases or any kind of branding concepts. (78ef70b8)

<p align="center"><img src="https://raw.githubusercontent.com/nordtheme/nord/78ef70b8/src/assets/nord-component-polar-night.svg?sanitize=true"/></p>

<p align="center"><img src="https://raw.githubusercontent.com/nordtheme/nord/78ef70b8/src/assets/nord-component-snow-storm.svg?sanitize=true"/></p>

<p align="center"><img src="https://raw.githubusercontent.com/nordtheme/nord/78ef70b8/src/assets/nord-component-frost.svg?sanitize=true"/></p>

<p align="center"><img src="https://raw.githubusercontent.com/nordtheme/nord/78ef70b8/src/assets/nord-component-aurora.svg?sanitize=true"/></p>

#### Port Projects

❯ Added new official port projects. (eacf9078, 51f46d1b, d51a995b)

<p align="center">
  <a href="https://github.com/arcticicestudio/nord-eclipse-syntax" target="_blank">
    <picture>
      <img src="https://raw.githubusercontent.com/nordtheme/nord/904af7f1/src/assets/banner-nord-eclipse-syntax.svg?sanitize=true" alt="Nord Eclipse Syntax" />
    </picture>
  </a>
  <a href="https://github.com/arcticicestudio/nord-gedit" target="_blank">
    <picture>
      <img src="https://raw.githubusercontent.com/nordtheme/nord/904af7f1/src/assets/nord-gedit-banner.svg?sanitize=true" alt="Nord gedit" />
    </picture>
  </a>
  <a href="https://github.com/arcticicestudio/nord-java" target="_blank">
    <picture>
      <img src="https://raw.githubusercontent.com/nordtheme/nord/904af7f1/src/assets/nord-java-banner.svg?sanitize=true" alt="Nord Java" />
    </picture>
  </a>
  <a href="https://github.com/arcticicestudio/nord-tilix" target="_blank">
    <picture>
      <img src="https://raw.githubusercontent.com/nordtheme/nord/904af7f1/src/assets/nord-tilix-banner.svg?sanitize=true" alt="Nord Tilix" />
    </picture>
  </a>
</p>

## Tasks

### Toolbox

❯ Added [Travis CI][ci-travisci] and [Circle CI][ci-circleci] configurations. (#4, 00beff7d)

❯ Added npm registry badges to show the latest published version and amount of downloads. (2c061e15)

# 0.1.0

![Release Date: 2016-09-04](https://img.shields.io/badge/Release_Date-2016--09--04-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/nord/projects/2) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/nord/milestone/1)

> Detailed information about features and the project can be found in the [project documentation][ghio-docs].

<p align="center">
  <picture>
    <img src="https://raw.githubusercontent.com/nordtheme/nord/ce89c254/src/assets/nord-overview.svg?sanitize=true" alt="Nord Palette Overview" />
  </picture>
</p>

## Features

❯ Added the <img src="http://sass-lang.com/favicon.ico" width=16 height=16 /> [Sass][sass] sources `nord.scss` and the `template-css.scss` CSS template which can be compiled to `nord.css` with [Gulp][gulp] by running `gulp compile-css-template`. (6106be79)

❯ Added the Sass documentation using <img src="http://sassdoc.com/favicon.png" width=16 height=16 /> [Sassdoc][sassdoc] which can be compiled to a static HTML documentation via [Gulp][gulp] by running `gulp sassdoc`. (ab2a6b45 and 133c597c)

❯ Added the <img src="http://lesscss.org/public/ico/favicon.ico" width=16 height=16 /> [Less][less] source `nord.less`. (dc568bb2)

❯ Added the Less source documentation using the [KSS][kss] documentation syntax. Information about the generation of a styleguide can be found in the [official KSS documentation][kss-doc-styleguide].

❯ Added various native color swatches:

<p align="center">
  <picture>
    <img src="https://raw.githubusercontent.com/nordtheme/nord/904af7f1/src/assets/icon-color-swatch.svg?sanitize=true" alt="Nord Palette Overview" />
  </picture>
</p>

- `.aco` - [Adobe Photoshop][adobe-photoshop] Palette
- `.ase` - [Adobe Swatch Exchange][adobe-help-color-swatches]
- `.gpa` - [Gpick][gpick] Palette
- `.gpl` - [GIMP][gimp-doc-color-palette], [Inkscape][inkscape-wiki-color-palette] and [Krita][krita-doc-color-palette] Palette
- `.mtl` - Alias and WaveFront Material

# Project Initialization

![Project Initialization: 2016-09-04](https://img.shields.io/badge/Project_Initialization-2016--09--04-88C0D0.svg?style=flat-square)

<p align="center">
  <picture>
    <source srcset="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/dark/spaced.svg?sanitize=true" width="100%" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
    <source srcset="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/light/spaced.svg?sanitize=true" width="100%" media="(prefers-color-scheme: dark)" />
    <img src="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/dark/spaced.svg?sanitize=true" width="100%" />
  </picture>
</p>

<p align="center">
  Copyright &copy; 2016-present <a href="https://www.svengreb.de" target="_blank">Sven Greb</a>
</p>

<p align="center">
  <a href="https://github.com/nordtheme/nord/blob/develop/license" target="_blank">
    <img src="https://img.shields.io/static/v1.svg?style=flat-square&label=License&message=MIT&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/>
  </a>
  <a href="https://www.svengreb.de">
    <img src="https://img.shields.io/static/v1.svg?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABMklEQVQ4jcWQvUoDQRRGz52s5IfVIiDWPkGKFFaCIVaGdIagjcFAwICFb7DvIK6QQlNpY2UQLMQVBbEQ0SewFkGbKCQmOzaTJay7/lR+zTAf9xwuF/47Mv45rdezqWEq72v/RWZnHgqOMwDwHMfSj085JSqb6Pu38we7r18E3nqzhmYbsE11rxKsAvhDfQiSM30XYbOw57YDwfnaRl6U3ABWaMNn806H+oGPzBX3d+4UgChZiYBHYBgGsBLoKoAyhR0x9G20Zmpc4P1ZoMQDcwMNclFrdhBKv6M5WWi7ZQGtjEUn35IV4OwnVjSX/WGmKqCDDUa5rmyle3bvGFiMg3WGUsF1u0EXHoqTRMGRgkAy2eugKZrqijRLYThWANBpNDL2h3UE0J0YLJdbrfe42f/NJ0wqY7/KcXKPAAAAAElFTkSuQmCC&label=lovely%20crafted%20in&message=Germany&colorA=4c566a&colorB=88c0d0"/>
  </a>
</p>

[adobe-help-color-swatches]: https://helpx.adobe.com/illustrator/using/using-creating-swatches.html
[adobe-photoshop]: http://adobe.com/products/photoshop
[apple-macos-design-guidelines-color]: https://developer.apple.com/macos/human-interface-guidelines/visual-design/color
[ci-circleci]: https://circleci.com/gh/arcticicestudio/nord
[ci-travisci]: https://travis-ci.org/arcticicestudio/nord
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
