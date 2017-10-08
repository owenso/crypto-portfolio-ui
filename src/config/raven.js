import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

export default function () {
  Raven
    .config('https://7010d30e10484045b6010aa54af37b2c@sentry.io/227278')
    .addPlugin(RavenVue, Vue)
    .install();
}
