---
title: My awesome page 3
pageClass: custom-page-class
---

# Page 3

[[toc]]

## Title 1

- Type: `string`
- Default: `/`

## Title 2

- Type: `string`
- Default: `/`

## Vue Components

- `<demo-component>`.
  <demo-component/>

- `<OtherComponent>`.
  <OtherComponent/>

- `<Foo-Bar>`.
  <Foo-Bar/>

## Code

```javascript
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
  return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
  return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```

### Highlight

```javascript{3,9-11}
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
  return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
  return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```

## Custom containers

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
