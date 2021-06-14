# vue-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# npm run test 报错 localStorage is not available for opaque origins

因为说是jest运行是node环境，所以没有localStorage。

解决方案: 
①在jest.conf.js中配置
  testEnvironment: 'jsdom',
  verbose: true,
  testURL: "http://localhost/"
②在package.json中配置
  "jest": {
    "verbose": true,
    "testURL": "http://localhost/"
    }
