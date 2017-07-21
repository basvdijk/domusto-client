<template>

  <div class="widget widget--th">
    <div class="widget__header">{{ sensor.device.name }}</div>
    <div class="widget__label">
      <span class="widget__label--temperature">{{ sensor.data.temperature }} &deg;C</span>
       / 
      <span class="widget__label widget__label--humidity">{{ sensor.data.humidity }}%</span>
    </div>
    <div class="widget__battery">
      <div class="widget__battery-value" v-bind:style="{ width: sensor.data.batteryLevel + 'px'}"></div>      
    </div>
  </div>

</template>

<script>
export default {
  props: ['sensor'],
  data: function() {
    return { };
  },
};
</script>

<style>
.widget {
  border: 1px solid #CCC;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  text-align: center;
  width: 200px;
}

.widget__battery {
  background-color: #EEE;
  width: 10px;
  border-radius: 2px;
}

.widget__battery-value{
  border-radius: 2px;
  height: 10px;
  background: green;
}
</style>