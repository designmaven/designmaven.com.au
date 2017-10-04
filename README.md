# [designmaven.com.au](http://designmaven.com.au)

A portfolio website for Sarah Dessmann.

Website hosted on [GitHub Pages](https://pages.github.com); domain name managed with [DNSimple](https://dnsimple.com).

Built with [React](https://reactjs.org), [Sass](http://sass-lang.com), [Babel](https://babeljs.io), [Browserify](http://browserify.org), and [Gulp](https://gulpjs.com). ✨

## Setup

First, install [Node.js](https://nodejs.org) and [NPM](https://www.npmjs.com).

Then clone this repository using [Git](https://git-scm.com) and run the following command in the repository's directory:

```bash
$ npm install
```

This installs all website dependencies to a `node_modules` directory.

## Develop

To work on the website further, execute the following command:

```bash
$ npm run develop
```

This will compile everything to a `dist` directory and serve the website at [http://localhost:9000](http://localhost:9000). A daemon will also be spawned to ensure that re-builds automatically occur whenever files change, so just keep that running while you develop.

Optionally, you can also install [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) for automatic page refreshes. 😎

## Deploy

When it is time to publish another release, run the following command:

```bash
$ npm run build
```

Again, this will compile everything to a `dist` directory, but this time in a release-ready state (i.e. minified JS and CSS).

Then switch to the `gh-pages` branch via Git and execute the following command:

```bash
$ cp -rf dist/* .
```

Now all files should be [in the right place](https://www.youtube.com/watch?v=sKZN115n6MI) for deployment.

Lastly, use Git to commit+push the files to GitHub. Congrats, you just successfully deployed the website. 👍
