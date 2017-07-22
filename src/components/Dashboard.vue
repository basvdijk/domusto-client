<template>
  <div>
  
    <ul v-if="socketMessage">
      <li v-for="sensor in socketMessage">
        <temperature :sensor="sensor"></temperature>
      </li>
    </ul>

    <ul v-if="outputs">
      <li v-for="output in outputs">
        {{ input }}
      </li>
    </ul>
  
    <div class="domusto__status">
      <p v-if="isConnected && !socketMessage">Connected to DOMUSTO server, waiting for first data</p>
      <p v-if="isConnected && socketMessage">Connected to DOMUSTO server, receiving data</p>
      <p v-if="!isConnected">NOT connected to DOMUSTO server!</p>
    </div>
  
    <pre>{{socketMessage}}</pre>
  
  </div>
</template>

<script>

import Temperature from '@/theme/domusto/widgets/Temperature';
import axios from 'axios';


export default {
  name: 'hello',
  data: () => ({
    socketMessage: null,
    inputs: null,
    isConnected: false,
    msg: 'Welcome to Your Vue.js App',
  }),

  created() {
    axios.get('http://192.168.178.72:3000/output')
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

  components: {
    Temperature,
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
</style>
