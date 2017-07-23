<template>
  <div class="widget widget--th">
    <div class="widget__label">
      <span class="widget__label--temperature">{{ round(sensor.data.temperature, 1) }} &deg;C</span>
      /
      <span class="widget__label widget__label--humidity">{{ sensor.data.humidity }}%</span>
    </div>
     <div class="widget__battery" v-bind:class="{ 'widget__battery--yellow': (sensor.data.batteryLevel === 0) }"></div> 
    <div class="widget__title">{{ sensor.device.name }}</div>
  </div>
</template>

<script>
import { round } from '@/filters.js'

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