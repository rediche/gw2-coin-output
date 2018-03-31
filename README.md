[![Published on webcomponents.org][webcomponents-image]][webcomponents-url]

# \<gw2-coin-output\>

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../iron-icon/iron-icon.html">
    <link rel="import" href="gw2-coin-output.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<gw2-coin-output coin-string="123456">...</gw2-coin-output>
```

Converts a coin string to gold, silver and copper values appended by the corresponding icon from Guild Wars 2.

## Prepend Zeroes

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../iron-icon/iron-icon.html">
    <link rel="import" href="gw2-coin-output.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<gw2-coin-output prepend-zeroes coin-string="123456">...</gw2-coin-output>
```

This prepends zeroes to silver and copper values if they are less than 10. Useful for making sure all `gw2-coin-output`s are easy to align vertically.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

[webcomponents-image]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/rediche/gw2-coin-output