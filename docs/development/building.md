> Please make sure to complete the [requirement][requirements] steps first in order to build the project!

Run `npm install` from within the project root to bootstrap the project and install all dependencies.

Continuous integration builds are running at [Travis CI][ci-travis] and [Circle CI][ci-circle].

## Optimized CSS Module

The Nord CSS module can be processed with the fast and efficient CSS optimizer [clean-css][npm-pkg-clean-css]. The cleaned and minified Nord CSS module will be output as `build/nord.css`.

```sh
npm run optimize:css
```

## Distribution

To start a distribution build run

```sh
npm run dist
```

## Documentations

This documentation can be build by runnning

```sh
npm run docs:build
```

from within the project root to bootstrap the build toolchain and install all dependencies. The output will be placed in `build/docs`.

To start the local hot reload server with browser live reload, using the default port `4000`, run

```sh
npm run docs:dev
```

### SassDoc

<img src="https://rawgit.com/arcticicestudio/nord/develop/docs/assets/sassdoc-logo.svg" width="15%" height="15%" />

Nord Sass sources are documented with [SassDoc][sassdoc]. A static HTML documentation can be compiled by running

```sh
npm run sassdoc
```

The output will be placed in `build/sassdoc`.

### KSS

The Nord Less and Stylus sources are documented using the [KSS](http://warpspire.com/kss) documentation syntax.

Information about the generation of a styleguide can be found in the [official KSS documentation][kss-doc-style-guides].

[requirements]: requirements.md

[ci-circle]: https://circleci.com/gh/arcticicestudio/nord
[ci-travis]: https://travis-ci.org/arcticicestudio/nord
[kss-doc-style-guides]: http://warpspire.com/kss/styleguides
[nodejs]: https://nodejs.org/en/download/current
[npm-pkg-clean-css]: https://www.npmjs.com/package/clean-css
[sassdoc]: http://sassdoc.com
