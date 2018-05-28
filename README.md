[![Published on webcomponents.org][webcomponents-image]][webcomponents-url]

# \<gw2-coin-output\>

<!---
```
<custom-element-demo>
  <template>
    <script src="./node_modules/webcomponentsjs/webcomponents-lite.js"></script>
    <script type="module" href="gw2-coin-output.js"></script>
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
    <script src="./node_modules/webcomponentsjs/webcomponents-bundle.js"></script>
    <script type="module" href="gw2-coin-output.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<gw2-coin-output prepend-zeroes coin-string="123456">...</gw2-coin-output>
```

This prepends zeroes to silver and copper values if they are less than 10. Useful for making sure all `gw2-coin-output`s are easy to align vertically.

## Install

```
npm i --save gw2-coin-output
```

## Development

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

### Viewing Your Application

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

[webcomponents-image]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/rediche/gw2-coin-output
