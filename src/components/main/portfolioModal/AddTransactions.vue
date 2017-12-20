<template>
    <div class='uk-grid-small'>
      <div class="uk-margin-medium-top uk-width-1-1">
        <input v-model="title" class="uk-input" type="text" placeholder="Title">
      </div>
      <div>
        <div class='uk-margin-small-top '>
          <div class='uk-width-1-1'>
            <v-autocomplete :items="items" v-model="currentItem" :get-label="getLabel" :min-len="0" :component-item='template' @update-items="updateItems" :input-attrs="{name: 'select-coin', id: 'select-coin', placeholder:'Coin', class:'uk-select'}"></v-autocomplete>
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
</template>
<script>
// import _ from 'lodash';
import AutocompleteItem from '../../global/AutocompleteItem';

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
      price: 0.0,
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
      this.items = this.coinlist.filter((item) => {
        return (new RegExp(text.toLowerCase())).test(item.name.toLowerCase())
          || (new RegExp(text.toLowerCase())).test(item.symbol.toLowerCase());
      });
    },
  },
  computed: {
    coinlist() {
      return this.$store.state.coins.list;
    },
  },
  created() {
    this.$store.dispatch('getCoinList');
  },
  watch: {
    coinlist() {
      this.items = this.coinlist;
    },
  },
};
</script>
<style lang="less">
.v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
  font-size: 1.5em;
  padding: 10px 15px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #157977;
  width: calc(100% - 32px);
  outline: none;
  background-color: #eee;
}

.v-autocomplete
  .v-autocomplete-input-group.v-autocomplete-selected
  .v-autocomplete-input {
  color: green;
  background-color: #f2fff2;
}

.v-autocomplete .v-autocomplete-list {
  width: 100%;
  text-align: left;
  border: none;
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 1px solid #157977;
}

.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #157977;
  border-left: 1px solid #157977;
  border-right: 1px solid #157977;
}

.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:last-child {
  border-bottom: none;
}

.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:hover {
  background-color: #eee;
}

.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item abbr {
  opacity: 0.8;
  font-size: 0.8em;
  display: block;
  font-family: sans-serif;
}

.note {
  border-left: 5px solid #ccc;
  padding: 10px;
}

.v-autocomplete {
  position: relative;
}

.v-autocomplete .v-autocomplete-list {
  position: absolute;
}

.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
  cursor: pointer;
}

.v-autocomplete
  .v-autocomplete-list
  .v-autocomplete-list-item.v-autocomplete-item-active {
  background-color: #f3f6fa;
}
</style>
