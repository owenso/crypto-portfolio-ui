<template>
    <div id='main-view' uk-grid>
        <div class='uk-visible@s uk-width-medium'>
            <sidebar></sidebar>
        </div>
        <!-- <div id="divider"></div> -->
        <div class="uk-width-auto">
            <div class='uk-hidden@s' id='mobile-bar'>
                <button v-on:click='logout()'>Logout</button>
            </div>
            <h1>Main View</h1>
        </div>
    </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar';

export default {
  data() {
    return {
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
#main-view{
  height:100%;
  background-color: white;
}

/* #divider{
    height:90%;
    padding:0;
    width:1px;
    margin: 2.5% 5px;
    border-right: 4px solid white;
} */

</style>