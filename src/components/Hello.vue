<template>
  <div class="hello">
  
    <ul v-if="socketMessage">
      <li v-for="sensor in socketMessage">
        <temperature :sensor="sensor"></temperature>
      </li>
    </ul>
  
    <div class="domusto__status">
      <p v-if="isConnected">Connected to DOMUSTO server, waiting for first data</p>
      <p v-if="!isConnected">NOT connected to DOMUSTO server!</p>
    </div>

    <pre>{{socketMessage}}</pre>
  
  </div>
</template>

<script>

import Temperature from '@/theme/domusto/widgets/Temperature';

// let socket = io.connect('http://192.168.178.72:3000/', { reconnect: true });
// socket.on('stream', (data) => {
//     app.sensorData = data;
// });


export default {
  name: 'hello',
  data: () => ({
    socketMessage: null,
    isConnected: false,
    msg: 'Welcome to Your Vue.js App',
  }),

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
