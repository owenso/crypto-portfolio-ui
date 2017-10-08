<template>
  <div id='user-panel'>
    <h3>{{userInfo.firstname}} {{userInfo.lastname}}</h3>
    <br />
    <a v-on:click='logout()'>Logout</a>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.user.info;
    },
  },
};
</script>

<style lang="less" scoped>
    #user-panel{
      padding-top: 2em;
      color: white;

      h1, h2, h3{
          color:white;
      }

    }
</style>
