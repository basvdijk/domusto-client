<template>
  <div class="widget widget--input">

    <div class="widget__label">
      
        <span class="widget__label--power">{{ sensor.data.actual.value * 1000 }} W</span>
        <!-- {{ sensor.data.actual.unit }} -->
      
        <div style="    position: absolute;   top: 0;">
      
          {{ round(sensor.data.tariff1.value, 0) }}
          {{ sensor.data.tariff1.unit }}
        
          /
        
          {{ round(sensor.data.tariff2.value, 0) }}
          {{ sensor.data.tariff2.unit }}

        </div>
      
    </div>
  
    <div class="widget__title">{{ sensor.name }}</div>
  </div>
</template>

<script>
import { round } from '@/app/filters.js'
const CONFIG = require('@/config');

export default {
  props: ['sensor'],
  data: function () {
    return {

    };
  },
  methods: {
    round
  },
};
</script>

<style>

</style>