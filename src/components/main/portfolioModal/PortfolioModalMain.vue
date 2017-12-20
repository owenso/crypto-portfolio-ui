<template>
    <div id="new-portfolio-modal" uk-modal>
    <button class="uk-modal-close-default" type="button" uk-close></button>
    <div class="uk-modal-dialog uk-modal-body">
      <transition name="fade" mode="out-in">
        <add-portfolio v-on:show='changeView' v-if='show === "addPortfolio"'></add-portfolio>
        <add-transactions v-on:show='changeView' v-if='show === "addTransactions"'></add-transactions>
      </transition>
    </div>
  </div>
</template>

<script>
import AddPortfolio from './AddPortfolio';
import AddTransactions from './AddTransactions';

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
  .enter { transform: translateX(100%) }
  .enter-to { transform: translateX(0) }
  .slide-enter-active { position: absolute }

  .leave { transform: translateX(0) }
  .leave-to { transform: translateX(-100%) }

  .slide-enter-active,
  .slide-leave-active { transition: all 750ms ease-in-out }
</style>


