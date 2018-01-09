Nord can be easily imported from the [Sass][sass], [Less][less], [Stylus][stylus] and [CSS][mdn-css-vars] modules as well as from various [native color swatch formats][color-swatches].

### Sass

```sass
@import "node_modules/nord/src/sass/nord.scss";

body {
  background-color: $nord0;
  color: $nord8;
}
```

### Less

```less
@import "node_modules/nord/src/lesscss/nord.less";

body {
  background-color: @nord0;
  color: @nord8;
}
```

### Stylus

```stylus
@import "node_modules/nord/src/stylus/nord.styl";

body {
  background-color: @nord0;
  color: @nord8;
}
```

### CSS

The [CSS specification][w3-css-spec] supports the usage of primitive value types to define custom properties which can be used to create e.g. color variables. CSS variables are entities that contain specific values to be reused throughout a document. They are set using [custom property][mdn-css-vars] notation (e.g. `--nord0: #2E3440;`) and are accessed using the `var()` function (e.g. `color: var(--nord0);`) .

All Nord color variables placed inside the `:root` pseudo-class. The `:root` pseudo-class represents an element that is the root of the document which is always the HTML (`<html>`) element and allows to use these variables for the whole document.

```css
@import "node_modules/nord/dist/nord.css";

body {
  background-color: var(--nord0);
  color: var(--nord8);
}
```

[color-swatches]: color-swatches.md

[less]: http://lesscss.org
[mdn-css-vars]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
[sass]: http://sass-lang.com
[stylus]: http://stylus-lang.com
[w3-css-spec]: https://www.w3.org/TR/css-variables
