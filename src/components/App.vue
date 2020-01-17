<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

let CONFIG = require('../config.js');

// Load the preferred theme and skin
require('@/themes/' + CONFIG.ui.theme + '/skins/' + CONFIG.ui.skin + '/main.css');

export default {
  name: 'app',
};
</script>

<style>

</style>
