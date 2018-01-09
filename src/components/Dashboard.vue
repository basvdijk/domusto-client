<template>
  <div>

    <swipe class="my-swipe" :auto="0" :speed="100">

    <template v-for="screen in screens">
   
      <swipe-item>
      
        <header v-if="!isConnected" class="toolbar toolbar--disconnected">
          <!-- <div class="toolbar--logo"></div> -->
          <span>Disconnected from DOMUSTO server</span>
        </header>
      
        <header v-if="isConnected" class="toolbar toolbar--connected">
          <div class="connected-dot"></div>
          <span>{{ screen.title }}</span>
        </header>

        <div class="widgets">
      
        <!-- <switch-on-off :output="testOutput"></switch-on-off>  -->

          <template v-for="output in outputs">
            <switch-on-off :key="output.id" v-if="(output.screens.indexOf(screen.id) > -1) && (output.subType === 'on/off')" :output="output"></switch-on-off>
            <switch-up-down :key="output.id" v-if="(output.screens.indexOf(screen.id) > -1) && (output.subType === 'up/down')" :output="output"></switch-up-down>
            <switch-momentary :key="output.id" v-if="(output.screens.indexOf(screen.id) > -1) && (output.subType === 'momentary')" :output="output"></switch-momentary>
          </template>

        </div>

        <div class="widgets">

          <template v-for="input in inputs">
            <temperature :key="input.id" v-if="(input.screens.indexOf(screen.id) > -1) && input.type === 'temperature'" :sensor="input"></temperature>
            <power :key="input.id" v-if="(input.screens.indexOf(screen.id) > -1) && input.type === 'power'" :sensor="input"></power>
          </template>
          
        </div>

        <!-- <switch-on-off :output="testOutput"></switch-on-off> -->
      
        <div class="domusto__status">
          <!-- <p v-if="isConnected && !inputDevices">Connected to DOMUSTO server, waiting for first data</p>
              <p v-if="isConnected && inputDevices">Connected to DOMUSTO server, receiving data</p> -->
      
        </div>

        </swipe-item>

      </template>
      
    </swipe>
  
    <!-- <h1>outputs</h1>
      <pre>{{outputs}}</pre>
    
      <h1>inputs</h1>
      <pre>{{inputs}}</pre> -->
  
  </div>
</template>

<script>
import CONFIG from "@/config";

import Temperature from "@/themes/domusto/widgets/Temperature";
import Power from "@/themes/domusto/widgets/Power";
import SwitchOnOff from "@/themes/domusto/widgets/Switch-on-off";
import SwitchUpDown from "@/themes/domusto/widgets/Switch-up-down";
import SwitchMomentary from "@/themes/domusto/widgets/Switch-momentary";
import { outputsSet } from "@/store/actions";

export default {
  vuex: {
    actions: {
      outputsSet
    }
  },
  name: "dashboard",
  data: () => ({
    inputDevices: null,
    // inputs: null,
    isConnected: false,
    testOutput: {
      name: "test",
      state: "on"
    }
  }),
  components: {
    Temperature,
    Power,
    SwitchOnOff,
    SwitchUpDown,
    SwitchMomentary
  },
  computed: {
    inputs() {
      return this.$store.state.inputs;
    },
    outputs() {
      return this.$store.state.outputs;
    },
    screens() {
      return this.$store.state.screens;
    }
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      console.log("connected");
      this.isConnected = true;
    },

    // Fired when the socket disconnects.
    disconnect() {
      console.log("disconnected");
      this.isConnected = false;
    },

    // Fired when the server sends something on the "inputDeviceUpdate" channel.
    inputDeviceUpdate(data) {
      this.$store.commit("INPUT_UPDATE", { inputData: data });
    },

    // Fired when the server sends something on the "outputDeviceUpdate" channel.
    outputDeviceUpdate(data) {
      this.$store.commit("OUTPUT_UPDATE", { outputData: data });
    },

    screensSet(data) {
      this.$store.commit("SCREENS_SET", { screens: data });
    }
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit("pingServer", "PING!");
    }
  }
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
