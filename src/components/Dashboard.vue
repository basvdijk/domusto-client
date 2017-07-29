<template>
  <div>
  
    <header class="toolbar" v-bind:class="{ 'toolbar--active': !isConnected }">
      <!-- <div class="toolbar--logo"></div> -->
      <span v-if="!isConnected">Disconnected from DOMUSTO server</span>
    </header>
  
    <div class="widgets">
  
     <switch-on-off :output="testOutput"></switch-on-off> 

      <template v-for="output in outputs">
        <switch-on-off :key="output.id" v-if="output.subtype === 'on/off'" :output="output"></switch-on-off>
        <switch-up-down :key="output.id" v-if="output.subtype === 'up/down'" :output="output"></switch-up-down>

      </template>


      <template v-for="input in inputs">
        <temperature :key="input.id" v-if="input.type === 'temperature'" :sensor="input"></temperature>
        <power :key="input.id" v-if="input.type === 'power'" :sensor="input"></power>
      </template>
      
    </div>

    <!-- <switch-on-off :output="testOutput"></switch-on-off> -->
  
    <div class="domusto__status">
      <!-- <p v-if="isConnected && !inputDevices">Connected to DOMUSTO server, waiting for first data</p>
          <p v-if="isConnected && inputDevices">Connected to DOMUSTO server, receiving data</p> -->
  
    </div>
  
    <!-- <h1>outputs</h1>
      <pre>{{outputs}}</pre>
    
      <h1>inputs</h1>
      <pre>{{inputs}}</pre> -->
  
  </div>
</template>

<script>

import CONFIG from '@/config';

import Temperature from '@/themes/domusto/widgets/Temperature';
import Power from '@/themes/domusto/widgets/Power';
import SwitchOnOff from '@/themes/domusto/widgets/Switch-on-off';
import SwitchUpDown from '@/themes/domusto/widgets/Switch-up-down';
import { outputsSet } from '@/store/actions';

export default {
  vuex: {
    actions: {
      outputsSet,
    }
  },
  name: 'dashboard',
  data: () => ({
    inputDevices: null,
    // inputs: null,
    isConnected: false,
    testOutput: {
      name: 'test',
      state: 'on'
    }
  }),
  components: {
    Temperature,
    Power,
    SwitchOnOff,
    SwitchUpDown
  },
  computed: {
    inputs() {
      return this.$store.state.inputs;
    },
    outputs() {
      return this.$store.state.outputs;
    }
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      console.log('connected');
      this.isConnected = true;

    },

    // Fired when the socket disconnects.
    disconnect() {
      console.log('disconnected');
      this.isConnected = false;
    },

    // Fired when the server sends something on the "inputDeviceUpdate" channel.
    inputDeviceUpdate(data) {
      console.log('input device update:', data);
      this.$store.commit('INPUT_UPDATE', { inputData: data });
    },

    // Fired when the server sends something on the "outputDeviceUpdate" channel.
    outputDeviceUpdate(data) {
      console.log('output device update', data);
      this.$store.commit('OUTPUT_UPDATE', { outputData: data });
    },
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('pingServer', 'PING!')
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.domusto__status {
  text-align: center;
}

ul {
  list-style: none;
}

pre {
  max-width: 100vw;
}

.widgets {
  margin: 0;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
