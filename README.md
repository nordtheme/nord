<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-logo-banner.svg"/></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord.svg?style=flat-square"/></a> <img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/v/nord.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dt/nord.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/dm/nord.svg?style=flat-square"/></a></p>

<p align="center"><img src="https://cdn.travis-ci.org/images/favicon-c566132d45ab1a9bcae64d8d90e4378a.svg" width=24 height=24/> <a href="https://travis-ci.org/arcticicestudio/nord"><img src="https://img.shields.io/travis/arcticicestudio/nord/develop.svg?style=flat-square"/></a> <img src="https://circleci.com/favicon.ico" width=24 height=24/> <a href="https://circleci.com/gh/arcticicestudio/nord"><img src="https://img.shields.io/circleci/project/github/arcticicestudio/nord/develop.svg?style=flat-square"/></a></p>

<p align="center"><a href="https://arcticicestudio.github.io/nord"><img src="https://img.shields.io/badge/Docs-0.2.0-5E81AC.svg?style=flat-square"/></a> <a href="https://arcticicestudio.github.io/nord/sassdoc"><img src="https://img.shields.io/badge/SassDoc-0.2.0-5E81AC.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/nord/blob/v0.2.0/CHANGELOG.md"><img src="https://img.shields.io/badge/Changelog-0.2.0-5E81AC.svg?style=flat-square"/></a></p>

---

<p align="center">An arctic, north-bluish color palette.</p>

<p align="center">Created for the clean- and minimal flat design pattern to achieve a optimal focus and readability for code syntax highlighting and UI.
It consists of a total of sixteen, carefully selected, dimmed pastel colors for a eye-comfortable, but yet colorful ambiance.</p>

<p align="center">The color palette it divided into four named components to represent the different color effects.</p>

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-overview.svg" alt="Nord Palette Overview"/></p>

Nord colors are numbered from `nord0` to `nord15` where each component contains a different amount of colors:

1. **Polar Night** `nord0` - `nord3`
2. **Snow Storm** `nord4` - `nord6`
3. **Frost** `nord7` - `nord10`
4. **Aurora** `nord11` - `nord15`

This naming convention allows an uncomplicated use for terminals and preserves the compatibility to similar projects like [base16][base16].

## Getting Started

This documentation provides chapters to learn about the [installation][ghio-docs-getting-started-installation] and [usage][ghio-docs-getting-started-usage] of the CSS based modules as well as the the available [native color swatch formats][ghio-docs-introduction-color-swatches]. It also includes a listing of all [official port projects][ghio-docs-introduction-port-projects] and [component cards][ghio-docs-introduction-component-cards].

The development chapters contain information about the [requirements][ghio-docs-dev-requirements], [how to build][ghio-docs-dev-building] the project and [run the tests][ghio-docs-dev-testing].

Nord is available in many formats and can be used with [npm][npm], by [downloading individual source files][gh-tree-src] or [cloning the repository][gh-repo]. The colors can be easily imported from the [Sass][sass], [Less][less], [Stylus][stylus] and [CSS][mdn-css-vars] modules as well as from various [native color swatch formats](#color-swatches).

The [official port projects](#port-projects) provide Nord for a wide range of applications, libraries, platforms and architectures.

### Quick Start

Install Nord using [npm][npm]:

```sh
npm install --save nord
```

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

```css
@import "node_modules/nord/dist/nord.css";

body {
  background-color: var(--nord0);
  color: var(--nord8);
}
```

When using the [optimized Nord CSS module][ghio-docs-dev-building-optimize-css-module] the import statement must be adjusted to match the path of the distributed file:

```css
@import "node_modules/nord/dist/nord.css";
```

## Color Swatches

![][assets-color-swatch]

* `.aco` - [Adobe Photoshop][adobe-photoshop] Palette
* `.ase` - [Adobe Swatch Exchange][adobe-help-color-swatches]
* `.clr` - [macOS Color][apple-macos-design-guidelines-color] Palette
* `.gpa` - [Gpick][gpick] Palette
* `.gpl` - [GIMP][gimp-doc-color-palette], [Inkscape][inkscape-wiki-color-palette] and [Krita][krita-doc-color-palette] Palette
* `.mtl` - Alias and WaveFront Material

## Port Projects

[![Nord Alacritty][assets-port-banner-alacritty]][gh-repo-nord-alacritty]

[![Nord Atom Syntax][assets-port-banner-atom-syntax]][atom-pkg-atom-syntax]

[![Nord Atom UI][assets-port-banner-atom-ui]][atom-pkg-atom-ui]

[![Nord Brackets][assets-port-banner-brackets]][gh-repo-nord-brackets]

[![Nord Coda][assets-port-banner-coda]][gh-repo-nord-coda]

[![Nord ConEmu][assets-port-banner-conemu]][gh-repo-nord-conemu]

[![Nord dircolors][assets-port-banner-dircolors]][gh-repo-nord-dircolors]

[![Nord Eclipse Syntax][assets-port-banner-eclipse-syntax]][gh-repo-nord-eclipse-syntax]

[![Nord Emacs][assets-port-banner-emacs]][gh-repo-nord-emacs]

[![Nord gedit][assets-port-banner-gedit]][gh-repo-nord-gedit]

[![Nord GNOME Terminal][assets-port-banner-gnome-terminal]][gh-repo-nord-gnome-terminal]

[![Nord Guake][assets-port-banner-guake]][gh-repo-nord-guake]

[![Nord highlight.js][assets-port-banner-highlightjs]][gh-repo-nord-highlightjs]

[![Nord Hyper][assets-port-banner-hyper]][gh-repo-nord-hyper]

[![Nord iTerm2][assets-port-banner-iterm2]][gh-repo-nord-iterm2]

[![Nord Java][assets-port-banner-java]][gh-repo-nord-java]

[![Nord JetBrains Editor][assets-port-banner-jetbrains-editor]][gh-repo-nord-jetbrains-editor]

[![Nord Konsole][assets-port-banner-konsole]][gh-repo-nord-konsole]

[![Nord Mintty][assets-port-banner-mintty]][gh-repo-nord-mintty]

[![Nord Notepad++][assets-port-banner-notepadplusplus]][gh-repo-nord-notepadplusplus]

[![Nord PuTTY][assets-port-banner-putty]][gh-repo-nord-putty]

[![Nord Slack][assets-port-banner-slack]][gh-repo-nord-slack]

[![Nord Sublime Text][assets-port-banner-sublime-text]][gh-repo-nord-sublime-text]

[![Nord Terminal.app][assets-port-banner-terminal-app]][gh-repo-nord-terminal-app]

[![Nord Terminator][assets-port-banner-terminator]][gh-repo-nord-terminator]

[![Nord Termite][assets-port-banner-termite]][gh-repo-nord-termite]

[![Nord Tilix][assets-port-banner-tilix]][gh-repo-nord-tilix]

[![Nord tmux][assets-port-banner-tmux]][gh-repo-nord-tmux]

[![Nord Vim][assets-port-banner-vim]][gh-repo-nord-vim]

[![Nord Visual Studio Code][assets-port-banner-visual-studio-code]][gh-repo-nord-visual-studio-code]

[![Nord Xcode][assets-port-banner-xcode]][gh-repo-nord-xcode]

[![Nord XFCE Terminal][assets-port-banner-xfce-terminal]][gh-repo-nord-xfce-terminal]

[![Nord Xresources][assets-port-banner-xresources]][gh-repo-nord-xresources]

## Component Cards

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-component-polar-night.svg"/></p>

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-component-snow-storm.svg"/></p>

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-component-frost.svg"/></p>

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-component-aurora.svg"/></p>

## Contributing

Read the [contributing guide][ghio-docs-dev-contributing] to learn about the development process and how to propose [enhancement suggestions][ghio-docs-dev-contributing-enhancements] and [report bugs][ghio-docs-dev-contributing-bug-reports], how to [submit pull requests][ghio-docs-dev-contributing-pr] and the project's [styleguides][ghio-docs-dev-contributing-styleguides], [branch organization][ghio-docs-dev-contributing-branch-org] and [versioning][ghio-docs-dev-contributing-versioning] model.

The guide also includes information about [minimal, complete, and verifiable examples][ghio-docs-dev-contributing-mcve] and other ways to contribute to the project like [improving existing issues][ghio-docs-dev-contributing-other-improve-issues] and [giving feedback on issues and pull requests][ghio-docs-dev-contributing-other-feedback].

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/banner-footer-mountains.svg" /></p>

<p align="center">Copyright &copy; 2016-present Arctic Ice Studio</p>

<p align="center"><a href="https://github.com/arcticicestudio/nord/blob/develop/LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-5E81AC.svg?style=flat-square"/></a> <a href="https://creativecommons.org/licenses/by-sa/4.0"><img src="https://img.shields.io/badge/License-CC_BY--SA_4.0-5E81AC.svg?style=flat-square"/></a></p>

[adobe-help-color-swatches]: https://helpx.adobe.com/illustrator/using/using-creating-swatches.html
[adobe-photoshop]: http://adobe.com/products/photoshop
[apple-macos-design-guidelines-color]: https://developer.apple.com/macos/human-interface-guidelines/visual-design/color
[assets-color-swatch]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/icon-color-swatch.svg
[assets-port-banner-alacritty]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-alacritty-banner.svg
[assets-port-banner-atom-syntax]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-atom-syntax-banner.svg
[assets-port-banner-atom-ui]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-atom-ui-banner.svg
[assets-port-banner-brackets]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-brackets-banner.svg
[assets-port-banner-coda]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-coda-banner.svg
[assets-port-banner-conemu]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-conemu-banner.svg
[assets-port-banner-dircolors]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-dircolors-banner.svg
[assets-port-banner-eclipse-syntax]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-eclipse-syntax-banner.svg
[assets-port-banner-emacs]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-emacs-banner.svg
[assets-port-banner-gedit]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-gedit-banner.svg
[assets-port-banner-gnome-terminal]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-gnome-terminal-banner.svg
[assets-port-banner-guake]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-guake-banner.svg
[assets-port-banner-highlightjs]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-highlightjs-banner.svg
[assets-port-banner-hyper]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-hyper-banner.svg
[assets-port-banner-iterm2]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-iterm2-banner.svg
[assets-port-banner-java]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-java-banner.svg
[assets-port-banner-jetbrains-editor]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-jetbrains-editor-banner.svg
[assets-port-banner-konsole]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-konsole-banner.svg
[assets-port-banner-mintty]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-mintty-banner.svg
[assets-port-banner-notepadplusplus]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-notepadplusplus-banner.svg
[assets-port-banner-putty]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-putty-banner.svg
[assets-port-banner-slack]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-slack-banner.svg
[assets-port-banner-sublime-text]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-sublime-text-banner.svg
[assets-port-banner-terminal-app]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-terminal-app-banner.svg
[assets-port-banner-terminator]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-terminator-banner.svg
[assets-port-banner-termite]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-termite-banner.svg
[assets-port-banner-tilix]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-tilix-banner.svg
[assets-port-banner-tmux]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-tmux-banner.svg
[assets-port-banner-vim]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-vim-banner.svg
[assets-port-banner-visual-studio-code]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-visual-studio-code-banner.svg
[assets-port-banner-xcode]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-xcode-banner.svg
[assets-port-banner-xfce-terminal]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-xfce-terminal-banner.svg
[assets-port-banner-xresources]: https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/nord-xresources-banner.svg
[atom-pkg-atom-syntax]: https://atom.io/themes/nord-atom-syntax
[atom-pkg-atom-ui]: https://atom.io/themes/nord-atom-ui
[base16]: http://chriskempson.com/projects/base16
[gh-repo]: https://github.com/arcticicestudio/nord.git
[gh-repo-nord-alacritty]: https://github.com/arcticicestudio/nord-alacritty
[gh-repo-nord-brackets]: https://github.com/arcticicestudio/nord-brackets
[gh-repo-nord-coda]: https://github.com/arcticicestudio/nord-coda
[gh-repo-nord-conemu]: https://github.com/arcticicestudio/nord-conemu
[gh-repo-nord-dircolors]: https://github.com/arcticicestudio/nord-dircolors
[gh-repo-nord-eclipse-syntax]: https://github.com/arcticicestudio/nord-eclipse-syntax
[gh-repo-nord-emacs]: https://github.com/arcticicestudio/nord-emacs
[gh-repo-nord-gedit]: https://github.com/arcticicestudio/nord-gedit
[gh-repo-nord-gnome-terminal]: https://github.com/arcticicestudio/nord-gnome-terminal
[gh-repo-nord-guake]: https://github.com/arcticicestudio/nord-gnome-terminal
[gh-repo-nord-highlightjs]: https://github.com/arcticicestudio/nord-highlightjs
[gh-repo-nord-hyper]: https://github.com/arcticicestudio/nord-hyper
[gh-repo-nord-iterm2]: https://github.com/arcticicestudio/nord-iterm2
[gh-repo-nord-java]: https://github.com/arcticicestudio/nord-java
[gh-repo-nord-jetbrains-editor]: https://github.com/arcticicestudio/nord-jetbrains-editor
[gh-repo-nord-konsole]: https://github.com/arcticicestudio/nord-konsole
[gh-repo-nord-mintty]: https://github.com/arcticicestudio/nord-mintty
[gh-repo-nord-notepadplusplus]: https://github.com/arcticicestudio/nord-notepadplusplus
[gh-repo-nord-putty]: https://github.com/arcticicestudio/nord-putty
[gh-repo-nord-slack]: https://github.com/arcticicestudio/nord-slack
[gh-repo-nord-sublime-text]: https://github.com/arcticicestudio/nord-sublime-text
[gh-repo-nord-terminal-app]: https://github.com/arcticicestudio/nord-terminal-app
[gh-repo-nord-terminator]: https://github.com/arcticicestudio/nord-terminator
[gh-repo-nord-termite]: https://github.com/arcticicestudio/nord-termite
[gh-repo-nord-tilix]: https://github.com/arcticicestudio/nord-tilix
[gh-repo-nord-tmux]: https://github.com/arcticicestudio/nord-tmux
[gh-repo-nord-vim]: https://github.com/arcticicestudio/nord-vim
[gh-repo-nord-visual-studio-code]: https://github.com/arcticicestudio/nord-visual-studio-code
[gh-repo-nord-xcode]: https://github.com/arcticicestudio/nord-xcode
[gh-repo-nord-xfce-terminal]: https://github.com/arcticicestudio/nord-xfce-terminal
[gh-repo-nord-xresources]: https://github.com/arcticicestudio/nord-xresources
[gh-tree-src]: https://github.com/arcticicestudio/nord/tree/develop/src
[ghio-docs]: https://arcticicestudio.github.io/nord
[ghio-docs-dev-building]: https://arcticicestudio.github.io/nord/development/building.html
[ghio-docs-dev-building-optimized-css-module]: https://arcticicestudio.github.io/nord/development/building.html#optimized-css-module
[ghio-docs-dev-contributing]: https://arcticicestudio.github.io/nord/development/contributing.html
[ghio-docs-dev-contributing-branch-org]: https://arcticicestudio.github.io/nord/development/contributing.html#branch-organization
[ghio-docs-dev-contributing-bug-reports]: https://arcticicestudio.github.io/nord/development/contributing.html#bug-reports
[ghio-docs-dev-contributing-enhancements]: https://arcticicestudio.github.io/nord/development/contributing.html#enhancement-suggestions
[ghio-docs-dev-contributing-mcve]: https://arcticicestudio.github.io/nord/development/contributing.html#mcve
[ghio-docs-dev-contributing-other-feedback]: https://arcticicestudio.github.io/nord/development/contributing.html#give-feedback-on-issues-and-pull-requests
[ghio-docs-dev-contributing-other-improve-issues]: https://arcticicestudio.github.io/nord/development/contributing.html#improve-issues
[ghio-docs-dev-contributing-pr]: https://arcticicestudio.github.io/nord/development/contributing.html#pull-requests
[ghio-docs-dev-contributing-styleguides]: https://arcticicestudio.github.io/nord/development/contributing.html#styleguides
[ghio-docs-dev-contributing-versioning]: https://arcticicestudio.github.io/nord/development/contributing.html#versioning
[ghio-docs-dev-requirements]: https://arcticicestudio.github.io/nord/development/requirements.html
[ghio-docs-dev-testing]: https://arcticicestudio.github.io/nord/development/testing.html
[ghio-docs-getting-started-installation]: https://arcticicestudio.github.io/nord/getting-started/installation.html
[ghio-docs-getting-started-usage]: https://arcticicestudio.github.io/nord/getting-started/usage.html
[ghio-docs-introduction-color-swatches]: https://arcticicestudio.github.io/nord/introduction/color-swatches.html
[ghio-docs-introduction-component-cards]: https://arcticicestudio.github.io/nord/introduction/component-cards.html
[ghio-docs-introduction-port-projects]: https://arcticicestudio.github.io/nord/introduction/port-projects.html
[gimp-doc-color-palette]: https://docs.gimp.org/en/gimp-concepts-palettes.html
[gpick]: http://gpick.org
[inkscape-wiki-color-palette]: http://wiki.inkscape.org/wiki/index.php/ColorPalette
[krita-doc-color-palette]: https://docs.krita.org/Palette
[less]: http://lesscss.org
[mdn-css-vars]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
[npm]: https://npmjs.com
[sass]: http://sass-lang.com
[stylus]: http://stylus-lang.com
