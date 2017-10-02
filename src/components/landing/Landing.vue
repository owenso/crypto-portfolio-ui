<template>
  <div class='uk-container uk-width-1-2@m uk-width-1-3@xl' id="landing">
      <div class="landing-content">
        <pass-reset v-on:show='changeView' v-if='show === "reset"'></pass-reset>
        <sign-up v-on:show='changeView' v-else-if='show === "signup"'></sign-up>
        <sign-in v-on:show='changeView' v-else-if='show === "signin"'></sign-in>
      </div>
  </div>
</template>

<script>
import SignIn from './children/SignIn';
import SignUp from './children/SignUp';
import PassReset from './children/PassReset';

export default {
  name: 'landing',
  data() {
    return {
      show: 'signin',
    };
  },
  components: {
    SignIn,
    SignUp,
    PassReset,
  },
  methods: {
    changeView: function changeView(argument) {
      this.show = argument;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#landing {
    height:100%;
}

.landing-content{
    margin-top: 20vh;
}
</style>
