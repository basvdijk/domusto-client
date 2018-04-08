<template>

  <div>
        <h1>Zwave</h1>

        <button v-on:click="zwaveEnabledInclusionMode">Inclusion mode</button>
        <button v-on:click="zwaveEnabledExclusionMode">Exclusion mode</button>
        <button v-on:click="zwaveCancelControllerCommand">Cancel command</button>
        
        <div class="admin-message">{{ message }}</div>

        <div v-if="device">

        <table>

        <tr>
            <td>manufacturer</td><td>{{ device.manufacturer }}</td>
        </tr>
        <tr>
            <td>manufacturerid</td><td>{{ device.manufacturerid }}</td>
        </tr>
        <tr>
            <td>name</td><td>{{ device.name }}</td>
        </tr>
        <tr>
            <td>product</td><td>{{ device.product }}</td>
        </tr>
        <tr>
            <td>productid</td><td>{{ device.productid }}</td>
        </tr>
        <tr>
            <td>producttype</td><td>{{ device.producttype }}</td>
        </tr>
        <tr>
            <td>ready</td><td>{{ device.ready }}</td>
        </tr>
        <tr>
            <td>type</td><td>{{ device.type }}</td>
        </tr>

        </table>

  

    

      <table class="data-table">

        <tr>
            <th>Node Id</th>
            <th>Command Class</th>
            <th>Id</th>
            <th>Label</th>
            <th>Value</th>
        </tr>

        <template v-for="deviceClass in device.classes">
            <tr>
                <td>{{ deviceClass[0].node_id }}</td>
                <td>({{ deviceClass[0].class_id }}) {{ zwaveClass(deviceClass[0].class_id) }}</td>
                <td>{{ deviceClass[0].value_id }}</td>
                <td>{{ deviceClass[0].label }}</td>
                <td>{{ deviceClass[0].value }}</td>
            </tr>

        </template>
      </table>

      </div>


        <h1>Devices</h1>

        <table class="data-table">
            <tr>
                <th>name</th>
                <th>id</th>
                <th>type</th>
                <th>subType</th>
                <th>plugin</th>
                <th>deviceId</th>
            </tr>

            <th colspan="7" scope="colgroup">Output</th>

        <template v-for="output in outputs">
            <!-- {{ output }} -->

            <tr>
                <td>{{ output.name }}</td>
                <td>{{ output.id }}</td>
                <td>{{ output.type }}</td>
                <td>{{ output.subType }}</td>
                <td>{{ output.plugin.id }}</td>
                <td>{{ output.plugin.deviceId }}</td>
            </tr>

        </template>

        <th colspan="7" scope="colgroup">Input</th>

        <template v-for="input in inputs">
            <!-- {{ input }} -->

            <tr>
                <td>{{ input.name }}</td>
                <td>{{ input.id }}</td>
                <td>{{ input.type }}</td>
                <td>{{ input.subType }}</td>
                <td>{{ input.plugin.id }}</td>
                <td>{{ input.plugin.deviceId }}</td>
            </tr>

        </template>

        </table>

        <!-- <div class="widgets" v-if="(Object.keys(outputs).filter(key => outputs[key].screens.indexOf(screen.id) > -1)).length > 0">

         

          </div> -->

          <!-- <div class="widgets" v-if="(Object.keys(inputs).filter(key => inputs[key].screens.indexOf(screen.id) > -1)).length > 0">

            <template v-for="input in inputs">
              <temperature :key="input.id" v-if="(input.screens.indexOf(screen.id) > -1) && input.type === 'temperature'" :sensor="input"></temperature>
              <power :key="input.id" v-if="(input.screens.indexOf(screen.id) > -1) && input.type === 'power'" :sensor="input"></power>
            </template>
            
          </div> -->
    </div>


</template>

<script>
import CONFIG from "@/config";
import ZWAVECLASSES from "@/zwave-classes";
import axios from "axios";

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
  name: "admin",
  data: () => ({
    device: null,
    message: "no server messages",
    inputDevices: null,
    // inputs: null,
    isConnected: false,
    testOutput: {
      name: "test",
      state: "on"
    },
    zwaveClass(classId) {
      return ZWAVECLASSES["class" + classId];
    }
  }),
  components: {
    Temperature,
    Power,
    SwitchOnOff,
    SwitchUpDown,
    SwitchMomentary
  },
  methods: {
    
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

    pluginZWave(data) {
      console.log(ZWAVECLASSES.class32);

      console.log(data);

      data.device.id = data.deviceId;

      this.device = data.device;

      if (data.type === "newDevice") {
      }
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
    zwaveEnabledInclusionMode() {
      this.message = "test";

      axios
        .get(
          "http://192.168.178.72:3000/plugin/domusto-zwave/nodes/inclusion-mode"
        )
        .then(response => {
          console.log(response);

          if (response.status === 200) {
            this.message = response.data.message;
          }
        });
    },
    zwaveEnabledExclusionMode() {
      axios
        .get(
          "http://192.168.178.72:3000/plugin/domusto-zwave/nodes/exclusion-mode"
        )
        .then(response => {
          this.message = response.data.message;
        });
    },
    zwaveCancelControllerCommand() {
      axios
        .get(
          "http://192.168.178.72:3000/plugin/domusto-zwave/nodes/cancel-controller-command"
        )
        .then(response => {
          this.message = response.data.message;
        });
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
