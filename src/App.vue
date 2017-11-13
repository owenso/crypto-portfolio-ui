<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

export default {
  name: 'app',
  data() {
    return {
      isConnected: false,
      socketMessage: '',
    };
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
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('pingServer', 'PING!');
    },
  },
};
</script>

<style>
@import '../node_modules/uikit/dist/css/uikit.min.css';
@import url('https://fonts.googleapis.com/css?family=Nunito');

html,
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
}

.uk-h1, .uk-h2, .uk-h3, .uk-h4, .uk-h5, .uk-h6, h1, h2, h3, h4, h5, h6 {
    font-family: 'Nunito', 'Avenir', Helvetica, Arial, sans-serif !important;
}

#app {
  height:100%;
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
