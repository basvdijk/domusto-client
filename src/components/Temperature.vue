<template>

  <div class="widget widget--th">

    <div class="widget__header">{{ sensor.device.name }}</div>
    <div class="widget__label widget__label--temperature">{{ sensor.data.temperature }} &deg;C</div>
    <div class="widget__label widget__label--humidity">{{ sensor.data.humidity }}%</div>
    <pre>{{sensor}}</pre>

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
.example {
  color: red;
}
</style>