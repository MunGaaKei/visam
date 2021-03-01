# <h1 align="center">VISAM UI</h1>

<p align="center"><b>A UI Framework for Vue 2.0</b></p>
<p align="center">
  <a href="https://www.npmjs.org/package/visam">
    <img src="https://img.shields.io/npm/v/visam.svg">
  </a>
  <!-- &nbsp;
  <a href="https://img.shields.io/github/stars/mungaakei/visam?style=social">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/mungaakei/visam?style=social">
  </a> -->
</p>
<br>

### FEATURES

- meticulous design UI
- dozens of components in common usaged
- friendly API
- highly extensible & easily customized
- with developer documentations & demo

<br>

### INSTALL

```node
npm install visam --save
```

```js
import visam from 'visam'
import 'visam/lib/visam.css'

Vue.use(visam)
```
&nbsp;
##### TREE SHAKING

```node
npm i babel-plugin-component -D
```

```js
// babel.config.js
plugins: [
  ["component", {
    libraryName: "visam",
    libDir: "lib/src",
    style: false,
  }],
]
```
```js
import { vsmButton } from 'visam';

Vue.use(vsmButton);
```
<br>

### DOCUMENTATION
You can find all of the functions、components & api only by downloading this repository at present.

```node
npm i
npm run serve
```

Then visit *[localhost:27149](localhost:27149)*

