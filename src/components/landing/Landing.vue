<template>
  <div class='uk-container uk-width-1-2@m uk-width-1-3@xl' id="landing">
      <div class="landing-content">
            <transition name="fade">

        <pass-reset v-on:show='changeView' v-if='show === "reset"'></pass-reset>
        <email-sent v-on:show='changeView' v-else-if='show === "emailSent"'></email-sent>
        <sign-up v-on:show='changeView' v-else-if='show === "signup"'></sign-up>
        <sign-in v-on:show='changeView' v-else-if='show === "signin"'></sign-in>
            </transition>
      </div>
  </div>
</template>

<script>
import SignIn from './children/SignIn';
import SignUp from './children/SignUp';
import PassReset from './children/PassReset';
import EmailSent from './children/EmailSent';

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
    EmailSent,
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
    margin-top: 15vh;
}
</style>
