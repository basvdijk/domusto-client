<template>
  <div>
  
    <ul class="widgets">
      <li v-for="output in outputs">
        <switch-on-off :output="output"></switch-on-off>
      </li>
  
      <li v-if="socketMessage" v-for="sensor in socketMessage">
        <temperature :sensor="sensor"></temperature>
      </li>
    </ul>
  
    <div class="domusto__status">
      <p v-if="isConnected && !socketMessage">Connected to DOMUSTO server, waiting for first data</p>
      <p v-if="isConnected && socketMessage">Connected to DOMUSTO server, receiving data</p>
      <p v-if="!isConnected">NOT connected to DOMUSTO server!</p>
    </div>
  
    <h1>outputs</h1>
    <pre>{{outputs}}</pre>
  
    <h1>sockets.io</h1>
    <pre>{{socketMessage}}</pre>
  
  </div>
</template>

<script>

const CONFIG = require('@/config');

import Temperature from '@/themes/domusto/widgets/Temperature';
import SwitchOnOff from '@/themes/domusto/widgets/Switch-on-off';
import axios from 'axios';


export default {
  name: 'dashboard',
  data: () => ({
    socketMessage: null,
    inputs: null,
    outputs: null,
    isConnected: false,
    msg: 'Welcome to Your Vue.js App',
  }),
  components: {
    Temperature,
    SwitchOnOff
  },

  created() {
    axios.get(CONFIG.server.address + '/output')
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response);
        this.outputs = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    stream(data) {
      console.log(data);
      this.socketMessage = data;
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

.widgets {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
