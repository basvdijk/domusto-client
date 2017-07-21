<template>
  <div class="hello">
  
    <ul v-if="socketMessage">
      <li v-for="sensor in socketMessage">
        <temperature :sensor="sensor"></temperature>
      </li>
    </ul>
  
    <div>
      <p v-if="isConnected">We're connected to the server!</p>
      <p v-if="!isConnected">We're NOT connected to the server!</p>
    </div>

    <pre>{{socketMessage}}</pre>
  
  </div>
</template>

<script>

import Temperature from '@/components/Temperature';

// let socket = io.connect('http://192.168.178.72:3000/', { reconnect: true });
// socket.on('stream', (data) => {
//     app.sensorData = data;
// });


export default {
  name: 'hello',
  data: () => ({
    sensorData: [{ a: 1 }, { b: 2 }],
    // sensorData: 'Connecting to server...',
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

</style>
