<template>
  <div class='uk-card uk-card-body uk-card-default'>
    <form class="uk-grid-small" uk-grid>
        <h2 class='uk-card-title'>Sign In</h2>
        <div class="uk-margin-medium-top uk-width-1-1">
            <input v-model="username" class="uk-input" type="text" placeholder="Username">
        </div>
        <div class="uk-width-1-1">
            <input v-model="password" class="uk-input" type="password" placeholder="Password">
        </div>
        <div class="uk-margin-small-bottom uk-margin-medium-top uk-width-1-1">
            <button v-on:click='submitLogin()' class='uk-button uk-button-default uk-width-1-1'>Log In</button>
        </div>
        <div class="uk-width-1-2 uk-text-center">
          <button class="uk-button uk-button-text" v-on:click="showSignUp">Sign Up</button>
        </div>
        <div class="uk-width-1-2 uk-text-center">
          <button class="uk-button uk-button-text" v-on:click="showReset">Forgot Your Password</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    showSignUp() {
      this.$emit('show', 'signup');
    },
    showReset() {
      this.$emit('show', 'reset');
    },
    submitLogin() {
      const payload = {
        Username: this.username,
        Password: this.password,
        Provider: 'local',
      };
      console.log(payload);
    },
  },
};
</script>
