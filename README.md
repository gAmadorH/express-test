# express test

The most commont and simple express.js example

## requirements

* [node v8.10.0](https://nodejs.org/en/)
* [npm v3.5.2](https://www.npmjs.com/)

## install

```
$ git clone https://github.com/gAmadorH/express-test.git
$ cd express-test
```

## run

```
$ npm i
$ npm start
$ # output
$ Server is listening on 3000 port
```

then you can make a request on: [http://localhost:3000/](http://localhost:3000/)

## creation step bye step

* create the project
```
 $ mkdir express-test && cd $_
 $ npm init -y
 $ npm i -S express
 $ touch index.js
 ```

* the content in index.js is:

 ```
'use strict'

const express = require('express')
const app = express()

app.get('/', (_req, res) => {
  res.send('Hello world!')
})

app.listen(3000, () => {
  console.log('Server is listening on 3000 port')
})

 ```

 * modificate the package.json file in the `scripts` session and add the `start` script

 ```
 "scripts": {
    "start": "node index.js"
  },
 ```

 * run de express test project

 ```
 $ npm start
 ```

 * then you can make a request on: [http://localhost:3000/](http://localhost:3000/)