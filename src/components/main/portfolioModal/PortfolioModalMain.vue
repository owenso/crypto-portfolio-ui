<template>
    <div id="new-portfolio-modal" uk-modal>
    <button class="uk-modal-close-default" type="button" uk-close></button>
    <div class="uk-modal-dialog uk-modal-body">
      <transition name="slide" mode="out-in">
        <add-portfolio v-on:show='changeView' v-if='show === "addPortfolio"' ></add-portfolio>
        <add-transactions v-on:show='changeView' v-if='show === "addTransactions"'></add-transactions>
      </transition>
    </div>
  </div>
</template>

<script>
// import UIkit from 'uikit';
import $ from 'jquery';
import AddPortfolio from './AddPortfolio';
import AddTransactions from './AddTransactions';

// const modal = UIkit.modal('#new-portfolio-modal');

$('#new-portfolio-modal').on({

  show: () => {
    console.log('Modal is visible.');
  },

  hide: () => {
    console.log('Element is not visible.');
  },
});


export default {
  data() {
    return {
      show: 'addPortfolio',
    };
  },
  components: {
    AddPortfolio,
    AddTransactions,
  },
  methods: {
    changeView: function changeView(argument) {
      this.show = argument;
    },
  },
};
</script>

<style scoped>
.uk-modal-body{
  overflow: hidden;
}
.slide-leave-active,
.slide-enter-active {
  transition: 500ms;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>


