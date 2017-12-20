import Vue from 'vue';


// https://gist.github.com/kkiernan/91298079d34f0f832054
// this_text => This Text

export default function () {
  Vue.filter('snakeToTitle', (str) => {
    return str.split('_').map((item) => {
      return item.charAt(0).toUpperCase() + item.substring(1);
    }).join(' ');
  });
}
