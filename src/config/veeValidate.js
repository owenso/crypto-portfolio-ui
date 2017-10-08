import Vue from 'vue';
import VeeValidate from 'vee-validate';


// http://vee-validate.logaretm.com/#configuration
export default function () {
  const config = {
    errorBagName: 'errors', // change if property conflicts.
    fieldsBagName: 'fields',
    delay: 1000,
    locale: 'en',
    dictionary: null,
    strict: true,
    classes: false,
    classNames: {
      touched: 'touched', // the control has been blurred
      untouched: 'untouched', // the control hasn't been blurred
      valid: 'valid', // model is valid
      invalid: 'invalid', // model is invalid
      pristine: 'pristine', // control has not been interacted with
      dirty: 'dirty', // control has been interacted with
    },
    events: 'input|blur',
    inject: true,
    validity: false,
    aria: true,
  };

  Vue.use(VeeValidate, config);
}
