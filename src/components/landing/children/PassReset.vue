<template>
  <div class="uk-container uk-container-small">
    <p>I'm the Password Reset component!</p>
    <button class="uk-button uk-button-default" v-on:click="showSignIn">Sign In</button>
    <button class="uk-button uk-button-default" v-on:click="showSignUp">Sign Up</button>
  </div>
</template>

<script>
export default {
//   data() {
//     return {
//     };
//   },
  methods: {
    showSignUp() {
      this.$emit('show', 'signup');
    },
    showSignIn() {
      this.$emit('show', 'signin');
    },
  },
};
</script>