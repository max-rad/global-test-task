import {initFlagAnimation} from './modules/animation/init-flag-animation.js';
import {initHeaderMenu} from './modules/init-header-menu.js';
import {iosVhFix} from './utils/ios-vh-fix.js';
import {initFormValidate} from './modules/init-form-validate.js';
import {initAjaxRequest} from './modules/initAjaxRequest.js';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  window.addEventListener('load', () => {
    initHeaderMenu();
    initFlagAnimation();
    initFormValidate();
    initAjaxRequest();
  });
});
