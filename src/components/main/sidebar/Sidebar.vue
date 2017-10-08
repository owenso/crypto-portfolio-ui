<template>
    <div id='side-bar' class='uk-text-center'>
        <user-panel></user-panel>
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
import UserPanel from './UserPanel';

export default {
  data() {
    return {
    };
  },
  components: {
    UserPanel,
  },
};
</script>

<style lang="less" scoped>
#side-bar{
    background-color: #13547a;
    height:100%;

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
