<template>
  <div class="widget widget--input">
    <div class="widget__label">
      <span v-if="sensor.data.temperature" class="widget__label--temperature">{{ temperature }}</span>
      <span v-if="sensor.data.temperature" class="widget__label--temperature-decimal">.{{ temperatureDecimal }}</span>
      
      
      <span class="widget__label--temperature-units">&deg;C</span> 
      <span v-if="sensor.data.humidity" class="widget__label--humidity">{{ sensor.data.humidity }}%</span>
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
  computed: {
    temperature() {
      return round(this.sensor.data.temperature, 1).split('.')[0];
    },
    temperatureDecimal() {
      return round(this.sensor.data.temperature, 1).split('.')[1];
    }
  },
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