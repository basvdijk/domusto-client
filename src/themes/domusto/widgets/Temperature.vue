<template>
  <div class="widget widget--input">
    <div class="widget__label">
      <span v-if="sensor.data.temperature" class="widget__label--temperature">{{ round(sensor.data.temperature, 1) }} &deg;C</span> 
      <span v-if="sensor.data.humidity" class="widget__label--humidity">&nbsp;&#183;&nbsp; {{ sensor.data.humidity }}%</span>
        <div class="widget__status-indicator" v-bind:class="{ 'widget__status-indicator--red': (sensor.data.batteryLevel <= config.ui.batteryWarningLevel) }"></div>
      <div class="widget__title">{{ sensor.name }}</div>
    </div>
  </div>
</template>

<script>
import { round } from '@/app/filters.js'
const CONFIG = require('@/config');

export default {
  props: ['sensor'],
  data: function () {
    return {
      config: CONFIG
    };
  },
  methods: {
    round
  },
};
</script>

<style>

</style>