# alphasquared.js

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][npm-url]

[npm-image]: http://img.shields.io/npm/v/alphasquared.js.svg?style=flat-square
[npm-url]: http://npmjs.org/package/alphasquared.js
[download-image]: https://img.shields.io/npm/dt/alphasquared.js.svg?style=flat-square

`alphasquared.js` is a super simple library that lets you fetch the latest risk value of BTC & ETH. Will be adding more functionality when they have an updated docs.

## Install

### As NPM package

```js
npm i alphasquared.js

// or if using yarn
yarn add alphasquared.js
```

## Usage

```ts
const client = new AlphaSquared("API_KEY");
const value = await client.get("BTC");
```

## Props

### get

Type: `function` (default: 'BTC')

Parameter: `string ("BTC"|"ETH")`

Get the risk value for given value.

## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

Released 2024 by [Shaun](https://github.com/ShaunLWM)
