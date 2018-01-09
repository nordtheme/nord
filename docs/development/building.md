> Please make sure to complete the [requirement][requirements] steps first in order to build the project!

Run `npm install` from within the project root to bootstrap the project and install all dependencies.

Continuous integration builds are running at [Travis CI][travis-ci] and [Circle CI][circle-ci].

You can run `npm run` and `gulp` to get a list of all available build scripts and commands.

## Documentations

This documentation can be build by runnning

```sh
npm run docs:build
```

from within the project root to bootstrap the build toolchain and install all dependencies.

The output will be placed in the `build/docs` directory.

To start the local hot reload server with browser live reload, using the default port `4000`, run

```sh
npm run docs:dev
```

### SassDoc

<img src="https://rawgit.com/arcticicestudio/nord/develop/docs/assets/sassdoc-logo.svg" width="15%" height="15%" />

Nord Sass sources are documented with [SassDoc][sassdoc]. A static HTML documentation can be compiled by running

```sh
gulp sassdoc
```

### KSS

Nord Less and Stylus sources are documented using the [KSS](http://warpspire.com/kss) documentation syntax.

Information about the generation of a styleguide can be found in the [official KSS documentation][kss-doc-style-guides].

[requirements]: requirements.md

[circle-ci]: https://circleci.com/gh/arcticicestudio/nord-hyper
[kss-doc-style-guides]: http://warpspire.com/kss/styleguides
[nodejs]: https://nodejs.org/en/download/current
[sassdoc]: http://sassdoc.com
[travis-ci]: https://travis-ci.org/arcticicestudio/nord-hyper
