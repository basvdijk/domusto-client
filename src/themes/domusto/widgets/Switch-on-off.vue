<template>
  <div class="widget widget--switch" v-on:click="toggle">
    <div class="widget__status-indicator" v-bind:class="{ 'widget__status-indicator--green': (output.state === 'on') }"></div>
    <div class="widget__title">{{ output.name }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import { round } from '@/filters.js'
const CONFIG = require('@/config');

export default {
  props: ['output'],
  data: function () {
    return {};
  },
  methods: {
    round,
    toggle: function () {

      console.log(this.output);

      if (this.output.state === 'off') {
        axios.get(this.output.actions.on).then(response => {
          this.output.state = response.state;
        });
      } else {
        axios.get(this.output.actions.off).then(response => {
          this.output.state = response.state;
        });
      }

      // axios.get(CONFIG.server.address + '/output')
      // .then(response => {
      //   // JSON responses are automatically parsed.
      //   console.log(response);
      //   this.outputs = response.data
      // })
      // .catch(e => {
      //   this.errors.push(e)
      // })
    }
  },
};
</script>

<style>

</style>