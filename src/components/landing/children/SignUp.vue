<template>
  <div class="uk-container uk-container-small">
    <p>I'm the SignUp component!</p>
    <button class="uk-button uk-button-default" v-on:click="showSignIn">Sign In</button>
    <button class="uk-button uk-button-default" v-on:click="showReset">Forgot Your Password</button>
  </div>
</template>

<script>
export default {
//   data() {
//     return {
//     };
//   },
  methods: {
    showSignIn() {
      this.$emit('show', 'signin');
    },
    showReset() {
      this.$emit('show', 'reset');
    },
  },
};
</script>