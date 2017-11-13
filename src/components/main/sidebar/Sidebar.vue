<template>
    <div id='side-bar' class='uk-text-center'>
        <user-panel></user-panel>
        <div id='sidebar-list' class='uk-panel uk-panel-scrollable' uk-height-viewport="offset-top: true">
            <ul class="uk-grid-collapse uk-text-center uk-child-width-1-1" uk-sortable="handle: .uk-sortable-handle" uk-grid>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card uk-sortable-handle">Item 1</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card uk-sortable-handle">Item 2</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card uk-sortable-handle">Item 3</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card uk-sortable-handle">Item 4</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card uk-sortable-handle">Item 5</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card uk-sortable-handle">Item 6</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card uk-sortable-handle">Item 7</div>
                </li>
                <li>
                    <div class="uk-card uk-card-default uk-card-body portfolio-card uk-sortable-handle">Item 8</div>
                </li>
                <li>
                    <div uk-toggle="target: #new-portfolio-modal" class="uk-card uk-card-default uk-card-body add-portfolio-card"> 
                        <span uk-icon="icon: plus"></span>
                        <p>Add New Portfolio</p>
                    </div>
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

        .add-portfolio-card{
            cursor: pointer;
            margin-bottom: 5px;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px white dashed;
            

            p{
                margin: 0;
            }
        }
    }

}
</style>
