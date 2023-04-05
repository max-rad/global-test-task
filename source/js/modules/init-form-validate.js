const form = document.querySelector('[data-form-validate]');
const breakpointMedia = window.matchMedia('(min-width: 768px)');

let input;
let placeholderDesktop;
let placeholderMobile;

const initFormValidate = () => {
  if (!form) {
    return;
  }

  input = form.querySelector('[data-input]');
  placeholderDesktop = document.querySelector('[data-placeholder-desktop]').dataset.placeholderDesktop;
  placeholderMobile = document.querySelector('[data-placeholder-mobile]').dataset.placeholderMobile;

  input.addEventListener('input', (evt) => {
    evt.preventDefault();

    const regex = new RegExp('[!@#$%^&*()]');
    let invalidMessage = [];
    input.setCustomValidity('');
    const value = input.value.trim();

    if (value.length < 4 || value.length > 12) {
      invalidMessage.push('Input string must contain 4-12 characters. Input string length now is ' + value.length);
    }

    if (regex.test(value)) {
      invalidMessage.push('Input string must not contain !@#$%^&*()');
    }

    input.setCustomValidity(invalidMessage.join('\n'));
    input.reportValidity();
  });

  breakpointChecker();
};

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    input.placeholder = placeholderDesktop;
  } else {
    input.placeholder = placeholderMobile;
  }
  breakpointMedia.addListener(breakpointChecker);
};

export {initFormValidate};
