<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Teko');

html {     
    background-color: #1d1d21;
    background-image: url(assets/backgrounds/micro-carbon.png);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #368bcb;
}
</style>
