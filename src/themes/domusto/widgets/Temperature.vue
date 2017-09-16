<template>
  <div class="widget widget--input">
    <div class="widget__label">
      <div v-if="sensor.data.temperature" class="widget__label--temperature">{{ round(sensor.data.temperature, 1) }} &deg;C</div>
  
      <div v-if="sensor.data.humidity" class="widget__label widget__label--humidity">{{ sensor.data.humidity }}%</div>
  
      <div class="widget__status-indicator" v-bind:class="{ 'widget__status-indicator--red': (sensor.data.batteryLevel === 0) }"></div>
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
    return {};
  },
  methods: {
    round
  },
};
</script>

<style>

</style>