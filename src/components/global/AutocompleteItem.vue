<template>
  <div class="uk-grid autocomplete-item">
    <div class='uk-width-1-4'>
      <!-- <small>#{{item.rank}}</small> -->
      <h3>{{item.symbol}}</h3>
    </div>
    <div class='uk-width-3-4'>
      <!-- <h4>{{item.value}}</h4> -->
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
    searchText: { required: true },
  },
};
</script>

<style lang="less" scoped>
    .autocomplete-item{
        width:100%;
    }
    p, h4{
        margin:0;
    }
</style>
