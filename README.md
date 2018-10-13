
[![Travis build status][travis-badge]][travis-build]
[![Codecov branch][codecov-badge]][codecov]
[![npm][npm-badge]][npm-version]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][license]

[![gzip size][gzip-badge]][unpkg]
[![size][size-badge]][unpkg]

[![Maintainability][code-climate-badge]][code-climate]
[![PRs Welcome][pull-request-badge]](http://makeapullrequest.com)

# my-gradient-background

# What?
A Web Component for an element gradient transition.

<img style="display: block;" src="./preview.gif" alt="Gradient background transitioning to different colors"></img>

# Getting started
```
npm install --save my-gradient-background
```

# Usage
```js
const MyGradientBackground = require("my-gradient-background");

if (!window.customElements.get("my-gradient-background")) {
  window.customElements.define("my-gradient-background", MyGradientBackground);
}
```

```html
<my-gradient-background gradient="red, white, blue"></my-gradient-background>

<script type="text/javascript">
  const gradientEle = document.querySelector("my-gradient-background");

  window.setTimeout(() => {
      // use any linear-gradient color
      // https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
      gradientEle.setAttribute("gradient", "#e66465, #9198e5");
  }, 2500);
</script>
```

[codecov]: https://codecov.io/gh/newyork-anthonyng/my-gradient-background
[codecov-badge]: https://img.shields.io/codecov/c/github/newyork-anthonyng/my-gradient-background/master.svg
[code-climate]: https://codeclimate.com/github/newyork-anthonyng/my-gradient-background/maintainability
[code-climate-badge]: https://api.codeclimate.com/v1/badges/faefec967ef40a030c3e/maintainability
[downloads-badge]: https://img.shields.io/npm/dm/my-gradient-background.svg?style=flat-square
[license]: https://github.com/newyork-anthonyng/my-gradient-background/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/my-gradient-background.svg?style=flat-square
[npmcharts]: https://npmcharts.com/compare/my-gradient-background
[npm-version]: https://www.npmjs.com/package/my-gradient-background
[npm-badge]: https://img.shields.io/npm/v/my-gradient-background.svg?style=flat-square
[pull-request-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[travis-badge]: https://travis-ci.org/newyork-anthonyng/my-gradient-background.svg?branch=master
[travis-build]: https://travis-ci.org/newyork-anthonyng/my-gradient-background
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/my-gradient-background?compression=gzip&label=gzip%20size&style=flat-square
[size-badge]: http://img.badgesize.io/https://unpkg.com/my-gradient-background?label=size&style=flat-square
[unpkg]: https://unpkg.com/my-gradient-background
