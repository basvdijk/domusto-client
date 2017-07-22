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
.widget {
  float: left;
  border: 4px solid #1d1d21;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
  width: 120px;
  font-family: 'Teko', sans-serif;
  box-shadow: 1px 1px 2px #52525a;
  z-index: -2;
  position: relative;
}

.widget:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: linear-gradient(to bottom, rgba(59, 59, 59, 1) 0%, rgba(33, 33, 33, 1) 100%);
  z-index: -1;
  left: 0px;
  top: 0;
}

.widget__title {
  font-size: 18px;
  color: #828282;
  text-transform: uppercase;
}

.widget__label {
  /* color: #a0cb36; */
  color: white;
  font-size: 20px;
}

.widget__battery {
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 10px;
    width: 15px;
    height: 5px;
    border-width: 1px;
    border-style: solid;
    border-color:  #252525;
    background-color: #333;
}

.widget__battery--green {
    border-color:  #6ad46a;
    background-color: lime;
    box-shadow: 0 0 10px lime;
}
.widget__battery--orange {
    border-color:  #e29200;
    background-color: orange;
    box-shadow: 0 0 10px orange;
}
.widget__battery--yellow {
    border-color:  #F3F372;
    background-color: yellow;
    box-shadow: 0 0 10px yellow;
}
.widget__battery--violet {
    border-color:  #e68de6;
    background-color: violet;
    box-shadow: 0 0 10px violet;
}
.widget__battery--violet {
    border-color:  #a6f7f7;
    background-color: cyan;
    box-shadow: 0 0 10px cyan;
}


.widget__battery-value {
  border-radius: 2px;
  height: 10px;
  background: green;
}

.knockout-top-to-bottom {
  position: relative;
}

.knockout-top-to-bottom:before,
.knockout-top-to-bottom:after {
  content: "";
  position: absolute;
}

.knockout-top-to-bottom:before {
  top: -3px;
  left: -3px;
  bottom: 0;
  right: -3px;
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#000), to(transparent));
  background-image: -webkit-linear-gradient(#000, transparent);
  background-image: -moz-linear-gradient(#000, transparent);
  background-image: -o-linear-gradient(#000, transparent);
  z-index: -2;
}

.knockout-top-to-bottom:after {
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #a4b9ff;
}
</style>