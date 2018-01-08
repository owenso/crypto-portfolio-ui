<template>
    <div id='side-bar' class='uk-text-center'>
        <user-panel></user-panel>
        <div id='sidebar-list' class='uk-panel uk-panel-scrollable' uk-height-viewport="offset-top: true">
            <ul class="uk-grid-collapse uk-text-center uk-child-width-1-1" id="sortable" uk-sortable="handle: .uk-sortable-handle" uk-grid>
                <portfolio-card v-for="portfolio in ownPortfolios.list" v-bind:key="portfolio.id" :data-id="portfolio.id" :id="portfolio.id" :title="portfolio.title"></portfolio-card>
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
import $ from 'jquery';
import UIkit from 'uikit';
import UserPanel from './UserPanel';
import PortfolioCard from './PortfolioCard';

export default {
  data() {
    return {
    };
  },
  components: {
    UserPanel,
    PortfolioCard,
  },
  mounted() {
    UIkit.util.on(('#sortable'), 'moved', (e) => {
      const array = [];
      const moved = e.detail[1];
      const parent = moved.parentNode;
      $(parent).find('.portfolio-card').each((index, each) => {
        array.push({
          index,
          userid: this.$store.state.user.info.id,
          portfolioid: $(each).data('id'),
        });
      });
      this.$store.dispatch('sortPortfolios', array);
    });
  },
  computed: {
    ownPortfolios() {
      return this.$store.state.portfolios.ownPortfolios;
    },
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
