<template>
  <div>

    <switch-on-off :output="testOutput"></switch-on-off>
  
    <ul class="widgets">
      <li v-for="output in outputs">
        <switch-on-off :output="output"></switch-on-off>
      </li>
  
       <li v-for="input in inputs">
        <temperature :sensor="input"></temperature>
      </li> 
    </ul>
  
    <div class="domusto__status">
      <!-- <p v-if="isConnected && !inputDevices">Connected to DOMUSTO server, waiting for first data</p>
      <p v-if="isConnected && inputDevices">Connected to DOMUSTO server, receiving data</p> -->
      <p v-if="!isConnected">NOT connected to DOMUSTO server!</p>
    </div>
  
    <h1>outputs</h1>
    <pre>{{outputs}}</pre>
  
    <h1>inputs</h1>
    <pre>{{inputs}}</pre>
  
  </div>
</template>

<script>

import CONFIG from '@/config';

import Temperature from '@/themes/domusto/widgets/Temperature';
import SwitchOnOff from '@/themes/domusto/widgets/Switch-on-off';
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
    SwitchOnOff
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

    disconnect() {
      console.log('disconnected');
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    deviceUpdate(data) {
      console.log('data received', data);
      this.$store.commit('INPUT_UPDATE', { inputData: data });
    },

    outputDeviceUpdate(data) {
      console.log('output data received', data);
      this.$store.commit('OUTPUT_UPDATE', { outputData: data });
    }
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
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
