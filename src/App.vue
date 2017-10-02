<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

export default {
  name: 'app',
};
</script>

<style>
@import '../node_modules/uikit/dist/css/uikit.min.css';

html,
body{
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  height:100%;
background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);}
</style>
