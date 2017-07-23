<template>
  <div class="widget widget--switch" v-on:click="toggle">
  
    <div class="widget__status-indicator" v-bind:class="{ 'widget__status-indicator--green': (output.state === 'on') }"></div>
    <div class="widget__title">{{ output.name }}</div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import axios from 'axios';
import { round } from '@/filters.js'
const CONFIG = require('@/config');

export default {
  props: ['output'],
  methods: {
    round,
    toggle: function () {

      let command = this.output.state === 'off' ? 'on' : 'off';

      axios.get(this.output.actions[command]).then(response => {
        this.output.state = response.data.state;
      });

    }
  },
};
</script>

<style>

</style>