<template>

  <div>

  <div class="widget widget--switch" v-on:click="toggle">
    <!-- <audio ref="audio" :src="audio"></audio> -->
    <div v-if="output.data && output.data.battery" class="widget__status-battery">{{ output.data.battery }}</div>
    <div class="widget__status-indicator" v-bind:class="{ 'widget__status-indicator--green': (output.data && output.data.state === 'on') }"></div>
    <div class="widget__timer-indicator" v-bind:class="{ 'widget__timer-indicator--enabled': output.hasTimers }"></div>
    <div class="widget__title">{{ output.name }}</div>
  
  </div>

  </div>
</template>

<script>
import axios from "axios";
import { round } from "@/app/filters.js";

let CONFIG = require("@/config.js");

export default {
  props: ["output"],
  data: function() {
    return {
      busy: false
    };
  },
  computed: {
    audio() {
      var audio = new Audio();
      audio.src = require("../assets/sounds/220176_4100837-hq.mp3");
      audio.preload = "auto";
      return audio;
    }
  },
  methods: {
    round,
    toggle: function() {
      
      if (CONFIG.buttonSound) {
        this.audio.currentTime = 0.01;
        this.audio.play();
      }

      if (!this.busy) {
        let command =
          this.output.data && this.output.data.state === "on" ? "off" : "on";

        this.busy = true;

        if (this.output.actions) {
          axios.get(this.output.actions[command]).then(() => {
            // this.output.state = response.data.state;
            this.busy = false;
          });
        } else {
          console.error("no action defined for for command: " + command);
        }
      }
    }
  }
};
</script>

<style>

</style>