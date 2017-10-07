<template>
    <div>
        <h1>Main View</h1>
        <button v-on:click='logout()'>Logout</button>
    </div>
</template>

<script>
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
};
</script>