<template>
  <div class="widget widget--input">
    <div class="widget__label">
      <span class="widget__label--temperature">{{ round(sensor.data.temperature, 1) }} &deg;C</span>
      /
      <span class="widget__label widget__label--humidity">{{ sensor.data.humidity }}%</span>
    </div>
    <div class="widget__status-indicator" v-bind:class="{ 'widget__status-indicator--red': (sensor.data.batteryLevel === 0) }"></div>
    <div class="widget__title">{{ sensor.name }}</div>
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