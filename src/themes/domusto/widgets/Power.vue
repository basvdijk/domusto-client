<template>
  <div class="widget widget--input">
    <div class="widget__label" v-if="sensor.protocol.type == 'received'">
      
        {{ round(sensor.data.electricity.received.actual.value, 3) }}
        {{ sensor.data.electricity.received.actual.unit }}
      
        <div>
      
          {{ round(sensor.data.electricity.received.tariff1.value, 0) }}
          {{ sensor.data.electricity.received.tariff1.unit }}
        
          /
        
          {{ round(sensor.data.electricity.received.tariff2.value, 0) }}
          {{ sensor.data.electricity.received.tariff2.unit }}

        </div>
      
    </div>
    <div class="widget__label" v-if="sensor.protocol.type == 'delivered'">
      
        {{ round(sensor.data.electricity.delivered.actual.value, 3) }}
        {{ sensor.data.electricity.delivered.actual.unit }}
      
        <div>
      
          {{ round(sensor.data.electricity.delivered.tariff1.value, 0) }}
          {{ sensor.data.electricity.delivered.tariff1.unit }}
        
          /
        
          {{ round(sensor.data.electricity.delivered.tariff2.value, 0) }}
          {{ sensor.data.electricity.delivered.tariff2.unit }}

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