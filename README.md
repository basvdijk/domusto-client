This project is pre-pre-pre-alpha, so don't expect a working solution.

# Setup

First make sure you have the DOMUSTO server up and running: https://github.com/basvdijk/domusto-server-nodejs

## Install npm packages

``` bash
npm install
```

## Setup configuration

Copy the config file template in the `src` folder to your own:

``` bash
cp src/config.example.js src/config.js
```

Edit the config file according to your setup.

## Start the client in development mode

```bash
npm run dev
```

## Hosting elsewhere

If you don't want to run the client in development mode you first need to build the client
```bash
npm run build
```

After building the `dist` folder contains the builded client. You can host the content of this directory on a server of your choice.


# Other building options

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
