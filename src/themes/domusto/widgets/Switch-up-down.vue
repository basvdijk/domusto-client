<template>
  <!-- <div class="widget widget--switch" v-on:click="toggle">
      
      <div class="widget__status-indicator" v-bind:class="{ 'widget__status-indicator--green': (output.state === 'on') }"></div>
      <div class="widget__title">{{ output.name }}</div>
    
    </div> -->
  
  <div class="widget switch-group">
  
    <div class="widget-switch--sub switch-position--left" v-on:click="up">
      <div class="widget__title">UP</div>
    </div>
    <div class="widget-switch--sub switch-position--right" v-on:click="down">
      <div class="widget__title">DOWN</div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import axios from 'axios';
import { round } from '@/app/filters.js'

let CONFIG = require('@/config.js');

export default {
  props: ['output'],
  data: function () {
    return {

    };
  },
  computed: {
    audio() {
      var audio = new Audio();
      audio.src = require('../assets/sounds/220176_4100837-hq.mp3');
      audio.preload = 'auto';
      return audio;
    }
  },
  methods: {
    round,

    up: function() {
      this.audio.currentTime = 0.01;
      this.audio.play();

      if (this.output.actions) {

      // console.log(this.output.actions['off']);

        axios.get(this.output.actions['off']).then(response => {
        });
      }

    },

    down: function() {
      this.audio.currentTime = 0.01;
      this.audio.play();



      if (this.output.actions) {

              // console.log(this.output.actions['on']);
        axios.get(this.output.actions['on']).then(response => {
        });
      }

    },

    // toggle: function () {

    //   this.audio.currentTime = 0.01;
    //   this.audio.play();

    //   let command = this.output.state === 'off' ? 'on' : 'off';

    //   if (this.output.actions) {

    //     axios.get(this.output.actions[command]).then(response => {
         
    //     });

    //   } else {
    //     console.error('no action defined for for command: ' + command);
    //   }

    // }
  },
};
</script>

<style>

</style>