<template>
  <div>
    <h2 class="uk-modal-title">Great! Add A Portfolio</h2>
    <div class='uk-grid-small'>
      <div class="uk-margin-medium-top uk-width-1-1">
        <input v-model="title" class="uk-input" type="text" placeholder="Title">
      </div>
      <div v-if="portfolioTypes.length > 1" class="uk-margin-small uk-width-1-1 uk-button-group">
        <button v-for="portfolioType in portfolioTypes" v-bind:key="portfolioType.id" :class="'uk-width-1-' + portfolioTypes.length " class="uk-button uk-button-primary radio-button " :value="portfolioType.id" name='portfolioType' > {{ portfolioType.name | snakeToTitle}}</button>
        <!-- <label v-for="portfolioType in portfolioTypes" v-bind:key="portfolioType.id"><input type="radio" class="uk-radio"  :value="portfolioType.id" name='portfolioType' /> {{ portfolioType.name | snakeToTitle}}</label> -->
      </div>
        <div class="uk-margin-small uk-width-1-1 data-uk-button-radio uk-button-group">
        <button v-for="privacyType in privacyTypes" v-bind:key="privacyType.id" :class="['uk-width-1-' + privacyTypes.length, {'button-chosen': (privacyType.id == privacy)}]" :title="privacyType.descripton" uk-tooltip="pos: bottom" class="uk-button uk-button-primary radio-button " :value="privacyType.id" name='privacyType' v-on:click="selectPrivacyType" > {{ privacyType.name | snakeToTitle}}</button>
        <!-- <label v-for="privacyType in privacyTypes" v-bind:key="privacyType.id"><input type="radio" class="uk-radio"  :value="privacyType.id" name='privacyType' /> {{ privacyType.name | snakeToTitle}}</label> -->
      </div>
    </div>
    <hr>
    <p class="uk-text-right">
    <button class="radio-button uk-button uk-button-small uk-button-default uk-modal-close" type="button" >Cancel</button>
    <button class="radio-button uk-button uk-button-small uk-button-primary" type="button" v-on:click="savePortfolio(true)">Add Transactions</button>        
    <button class="radio-button uk-button uk-button-small uk-button-primary" type="button" v-on:click="savePortfolio(false)">Save And Finish Later</button>
    </p>
  </div>
</template>

<script>
import UIkit from 'uikit';
import swal from 'sweetalert2';

export default {
  data() {
    return {
      title: '',
      portfolioType: 1,
      privacy: 0,
    };
  },
  methods: {
    selectPortFolioType(e) {
      this.portfolioType = e.target.value;
    },
    selectPrivacyType(e) {
      this.privacy = parseInt(e.target.value, 10);
    },
    savePortfolio(next) {
      const payload = {
        Title: this.title,
        PortfolioType: this.portfolioType,
        Privacy: this.privacy,
      };
      this.$store.dispatch('savePortfolio', payload)
      .then(() => {
        this.$store.dispatch('getOwnPortfolios');
        if (next) {
          this.$emit('show', 'addTransactions');
        } else {
          UIkit.modal('#new-portfolio-modal').hide();
          swal(
            'Portfolio Added',
            `"${this.title}" was successfully added. It should appear in your portfolio list and
             you can add to it whenever you're ready.`,
            'success',
          );
        }
      })
      .catch(() => {
        swal(
          'Error',
          'Sorry, there was an error trying to add your portfolio. Please try again later.',
          'error',
        );
        UIkit.modal('#new-portfolio-modal').hide();
      });
    },
  },
  computed: {
    portfolioTypes() {
      return this.$store.state.portfolios.portfolioTypes;
    },
    privacyTypes() {
      return this.$store.state.portfolios.privacyTypes;
    },
  },
};
</script>

<style lang="less" scoped>
.radio-button{
  border:1px solid white;
}

.button-chosen{
  background-color: #03305f
}
</style>
