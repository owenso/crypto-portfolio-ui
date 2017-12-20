<template>
    <div id='main-view' uk-grid>
        <div class='uk-visible@s uk-width-medium'>
            <sidebar></sidebar>
        </div>
        <div class="uk-width-auto">
            <div class='uk-hidden@s' id='mobile-bar'>
                <button v-on:click='logout()'>Logout</button>
            </div>
            <h1>Main View</h1>
        </div>
        <portfolio-card></portfolio-card>
    </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar';
import PortfolioCard from './portfolioModal/PortfolioModalMain';
import socket from '../../config/socketio';


export default {
  data() {
    return {
    };
  },
  created: function triggerSockets() {
    socket();
    this.$store.dispatch('getPortfolioTypes');
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
  components: {
    Sidebar,
    PortfolioCard,
  },
};
</script>

<style scoped>
#main-view{
  height:100%;
  background-color: white;
}

</style>