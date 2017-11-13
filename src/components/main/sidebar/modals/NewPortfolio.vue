<template>
  <div id="new-portfolio-modal" uk-modal>
    <button class="uk-modal-close-default" type="button" uk-close></button>
    <div class="uk-modal-dialog uk-modal-body">
      <h2 class="uk-modal-title">Add A Portfolio</h2>
      <div>
        <div class="uk-margin-medium-top uk-width-1-1">
          <input v-model="title" class="uk-input" type="text" placeholder="Title">
        </div>
        <v-autocomplete :items="items" v-model="item" :get-label="getLabel" :component-item='template' @update-items="updateItems"></v-autocomplete>
      </div>
      <p class="uk-text-right">
        <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
        <button class="uk-button uk-button-primary" type="button">Save</button>
      </p>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import AutocompleteItem from '../../../global/AutocompleteItem';

  export default {
    data() {
      return {
        title: '',
      };
    },
    methods: {
      onSelect(item) {
        this.item = item;
      },
    },
    components: {
      'v-autocomplete': AutocompleteItem,
    },
    computed: {
      ...mapGetters([
        'cmc',
        'coinlist',
      ]),
    },
  };

</script>
