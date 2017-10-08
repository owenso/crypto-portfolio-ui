<template>
    <div id='side-bar' class='uk-text-center'>
        <div id="sidebar-top">
            <h1>Sidebar</h1>
            <button v-on:click='logout()'>Logout</button>
        </div>
        <div id='sidebar-list' class='uk-panel uk-panel-scrollable' uk-height-viewport="offset-top: true">
            <ul class="uk-grid-collapse uk-text-center uk-child-width-1-1" uk-sortable="handle: .uk-card" uk-grid>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card">Item 1</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card">Item 2</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card">Item 3</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card">Item 4</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card">Item 5</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card">Item 6</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card">Item 7</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card">Item 8</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang="less" scoped>
#side-bar{
    background-color: #13547a;
    height:100%;

    #sidebar-top{
        padding-top: 2em;
    }

    h1{
        color: white;
    }

    #sidebar-list{
    resize:none;

        ul{
            list-style-type: none;
        }

        .portfolio-card{
            margin-bottom: 5px;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px white solid;
        }
    }

}
</style>
