# Purgecss-from-js

[![Build Status](https://travis-ci.org/FullHuman/purgecss-from-js.svg?branch=master)](https://travis-ci.org/FullHuman/purgecss-from-js)
[![CircleCi](https://circleci.com/gh/FullHuman/purgecss-from-js/tree/master.svg?style=shield)]()
[![dependencies Status](https://david-dm.org/fullhuman/purgecss-from-js/status.svg)](https://david-dm.org/fullhuman/purgecss-from-js)
[![devDependencies Status](https://david-dm.org/fullhuman/purgecss-from-js/dev-status.svg)](https://david-dm.org/fullhuman/purgecss-from-js?type=dev)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fdc42da4f4254aed836add2f772c0708)](https://www.codacy.com/app/FullHuman/purgecss-from-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=FullHuman/purgecss-from-js&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/fdc42da4f4254aed836add2f772c0708)](https://www.codacy.com/app/FullHuman/purgecss-from-js?utm_source=github.com&utm_medium=referral&utm_content=FullHuman/purgecss-from-js&utm_campaign=Badge_Coverage)
[![npm](https://img.shields.io/npm/v/purgecss-from-js.svg)](https://www.npmjs.com/package/purgecss-from-js)
[![license](https://img.shields.io/github/license/fullhuman/purgecss-from-js.svg)]()

Get the selectors of a JS file.  
This is an experimental js extractor for purgecss. It uses prepack to partially evaluate the javascript code.

## Install

```
npm i -D purgecss-from-js
```

## Usage

### Use with Purgecss
```js
import Purgecss from "purgecss"
import purgeHtml from "purgecss-from-js"
const purgeCss = new Purgecss({
    content: ["**/*.html"],
    css: ["**/*.css"],
    extractors: [
        {
            extractor: purgeJs,
            extensions: ["js"]
        }
    ]
})
const result = purgecss.purge()
```

### Use alone

```js
import purgeHtml from "purgecss-from-js"
import fs from "fs"

const htmlContent = fs.readFileSync("index.js")
const htmlSelectors = purgeHtml.extract(htmlContent)

```