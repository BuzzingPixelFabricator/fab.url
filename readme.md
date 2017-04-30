# Fabricator URL Component

While this component is designed with the [BuzzingPixel Fabricator Build Process](https://github.com/tjdraper/buzzing-pixel-fabricator) in mind, it can be used anywhere (in theory).

## Installing

With Fabricator and NPM, simply require this library into your project and restart the Fabricator Grunt build process.

`npm install fab.url --save`

If you are not using Fabricator, you will need to in some manner compile `src/FAB.url.js` into your build process or put it somewhere where you can link it into your projects.

## Usage

### `FAB.URL.getQueryString();`

Gets the raw query string.

### `FAB.URL.getQueryArray();`

Gets an array of the query string items (split on ampersand).

### `FAB.URL.getQueryObject();`

Gets an object of the query string with key/values.

### `FAB.URL.getQueryItem('key');`

Checks the query object for the specified key. Returns `null` if key does not exist.

### `FAB.URL.getHash();`

Gets the hash from the URL. Returns `null` if hash does not exist.
