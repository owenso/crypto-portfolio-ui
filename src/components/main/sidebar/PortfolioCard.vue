<template>
    <router-link v-bind:to="{name:'portfolioInfo', params:{portfolioId:id}}" tag="div" class="uk-card uk-card-default uk-card-body 	uk-sortable-item portfolio-card">
        <span class="uk-sortable-handle" uk-icon="icon: grid"></span>
        {{title}}
    </router-link> 
</template>

<script>

export default {
  props: ['id', 'title'],
};
</script>

<style scoped>
    .uk-card{
        cursor: pointer;
    }
    .router-link-active{
        background-color: rgba(255, 255, 255, .3) !important;
    }
</style>
