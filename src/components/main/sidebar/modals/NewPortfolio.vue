<template>
  <div id="new-portfolio-modal" uk-modal>
    <button class="uk-modal-close-default" type="button" uk-close></button>
    <div class="uk-modal-dialog uk-modal-body">
      <h2 class="uk-modal-title">Add A Portfolio</h2>
      <div class='uk-grid-small'>
        <div class="uk-margin-medium-top uk-width-1-1">
          <input v-model="title" class="uk-input" type="text" placeholder="Title">
        </div>
        <div>
          <div class='uk-margin-small-top '>
            <div class='uk-width-1-1'>
              <v-autocomplete :items="items" v-model="currentItem" :get-label="getLabel" :component-item='template' @update-items="updateItems" :input-attrs="{name: 'select-coin', id: 'select-coin', placeholder:'Coin', class:'uk-select'}"></v-autocomplete>
            </div>
          </div>
          <div class='uk-margin-small-top'>
            <div class='uk-width-1-2'>
              <input v-model="transactionDate" class="uk-input" type="date" placeholder="Transaction Date">
            </div>
            <div class='uk-width-1-2'>
            </div>
          </div>
          <div class='uk-grid uk-margin-small-top'>
            <div class='uk-width-1-2'>
              <input v-model="qty" class="uk-input" type="number" placeholder="Quantity">
            </div>
            <div class='uk-width-1-2'>
              <input v-model="price" class="uk-input" type="price" placeholder='Price'>
            </div>
          </div>

          <p class="uk-text-right">
              <button class='uk-button uk-button-text' v-on:click="addToCoins">ADD</button>
          </p>
        </div>
      </div>
      <p class="uk-text-right">
        <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
        <button class="uk-button uk-button-primary" type="button">Save</button>
      </p>
    </div>
  </div>
</template>
<script>
  // import _ from 'lodash';
  import AutocompleteItem from '../../../global/AutocompleteItem';

  export default {
    data() {
      return {
        currentItem: {},
        selectedItems: [],
        items: [],
        title: '',
        transactionDate: '',
        template: AutocompleteItem,
        qty: 0,
        price: 0.00,
      };
    },
    methods: {
      addToCoins() {
        if (this.currentItem !== {}) {
          this.selectedItems.push(this.currentItem);
          this.currentItem = {};
        }
      },
      onSelect(item) {
        console.log('item selected');
        this.currentItem = item;
      },
      getLabel(item) {
        return item.name ? `${item.value} - ${item.name}` : '';
      },
      updateItems(text) {
        console.log('update');
        console.log(this.$store.getters.coinlist);
        console.log(text.length);
        if (text.length > 0) {
          this.filtered = true;
          this.items = store.getters.coinlist.filter((item) => {
            return (new RegExp(text.toLowerCase())).test(item.name.toLowerCase())
            || (new RegExp(text.toLowerCase())).test(item.value.toLowerCase());
          });
        } else {
          this.filtered = false;
        }
      },
    },
    computed: {
      // ...mapGetters([
      //   'cmc',
      // ]),

      coinlist: function coinlist(state) {
        console.log('computed updated');
        console.log(state);
        if (!this.filtered) {
          this.items = this.$store.getters.coinlist;
        }
      },
    },
  };

</script>
<style lang="less">
  .v-autocomplete-list{
    z-index: 10000;
    width: 100%;
  }
</style>
