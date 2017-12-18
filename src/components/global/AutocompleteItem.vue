<template>
  <div class="uk-grid autocomplete-item">
    <div class='uk-width-1-6'>
      <small>#{{item.rank}}</small>
    </div>
    <div class='uk-width-5-6'>
      <h4>{{item.value}}</h4>
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
