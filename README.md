# Fibonacci Spacing

[![Build](https://img.shields.io/github/checks-status/quassum/fibonacci-spacing/main)](https://github.com/quassum/fibonacci-spacing/actions)
[![NPM Version](https://img.shields.io/npm/v/@quassum/fibonacci-spacing)](https://www.npmjs.com/package/@quassum/fibonacci-spacing)
[![NPM Downloads](https://img.shields.io/npm/dm/@quassum/fibonacci-spacing)](https://www.npmjs.com/package/@quassum/fibonacci-spacing)
[![gzipped size](https://img.badgesize.io/https:/unpkg.com/@quassum/fibonacci-spacing@latest/build/index.es.js?label=gzipped&compression=gzip&style=flat-square)](https://unpkg.com/@quassum/fibonacci-spacing@latest/build/index.es.js)
[![License](https://img.shields.io/npm/l/@quassum/fibonacci-spacing)](https://github.com/quassum/fibonacci-spacing/blob/main/LICENSE)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/bring.shrubbery)

Spacing for a design system, but it's fibonacci!

## Install

Using `npm`:

```
npm install @quassum/fibonacci-spacing
```

Using `yarn`:

```
yarn add @quassum/fibonacci-spacing
```

## Usage

### Basic usage

```js
import { getFibonacciSpacing } from '@quassum/fibonacci-spacing';

const spacing = getFibonacciSpacing();
// Results in:
// const spacing = {
//   1: '1px',
//   2: '2px',
//   3: '3px',
//   5: '5px',
//   8: '8px',
//   13: '13px',
//   etc...
// }
```

### Options

You can also provide some options, for example you could provide a different unit to generate:

```js
const spacing = getFibonacciSpacing({ unit: 'rem' });
```

Notice that when changing the unit, the generates `spacing` constant generates the correct types for each value in fibonacci sequence.

You could also invert the values.
In that case when accessing the values by their fibonacci numbered keys, you will get value which is equal to 1 divided by that value.
For example, following shows the examples of the values you get:

```js
const spacing = getFibonacciSpacing({ unit: 'rem', invert: true });

spacing[1]; // '1rem'
spacing[5]; // '0.2rem'
spacing[8]; // '0.125rem'
// etc
```

## Contributors

- [Antoni Silvestrovic (author)](https://github.com/bring-shrubbery)

## License

[MIT](https://github.com/quassum/fibonacci-spacing/blob/master/LICENSE)
