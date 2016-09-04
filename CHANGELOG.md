<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/nord-logo-banner.svg"/></p>

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
  - **Alias/WaveFront Material**: nord.mtl`

# 0.0.0 (2016-09-04)
**Project Initialization**

[icon-color-swatch]: https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/icon-color-swatch.svg
[sassdoc]: http://sassdoc.com
[gulp]: http://gulpjs.com
