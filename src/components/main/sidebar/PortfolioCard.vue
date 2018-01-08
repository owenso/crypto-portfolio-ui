<template>
    <router-link v-bind:to="{name:'portfolioInfo', params:{portfolioId:id}}" tag="div" class="uk-card uk-card-default uk-card-body 	uk-sortable-item portfolio-card">
        <span class="uk-sortable-handle uk-drag uk-width-1-4" uk-icon="icon: grid"></span>
        <span class='uk-width-3-4'>{{title}}</span>
    </router-link> 
</template>

<script>

export default {
  props: ['id', 'title'],
};
</script>

<style scoped>
    .uk-card-body{
        cursor: pointer;
        padding: 30px 0;
    }
    .router-link-active{
        background-color: rgba(255, 255, 255, .3) !important;
    }
</style>
