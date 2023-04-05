import {gsap} from '../../vendor/gsap.min.js';

const breakpointMedia = window.matchMedia('(min-width: 768px)');

const circle = document.querySelector('.intro__circle');

const flagFirst = document.querySelector('.intro__flag-image--first');
const flagSecond = document.querySelector('.intro__flag-image--second');
const flagThird = document.querySelector('.intro__flag-image--third');
const flagFourth = document.querySelector('.intro__flag-image--fourth');
const flagFifth = document.querySelector('.intro__flag-image--fifth');
let tl;

const initAnimation = () => {
  const animation = document.querySelector('[data-animation]');

  if (!animation) {
    return;
  }

  tl = gsap.timeline({paused: true});

  tl.add('start')
    .to(flagFirst, {x: -220, y: 45, opacity: 1, duration: 2, ease: 'ease'}, 'start')
    .to(flagSecond, {x: -196, y: -110, opacity: 1, duration: 2, ease: 'ease'}, 'start+=0.4')
    .to(flagThird, {x: 19, y: -227, opacity: 1, duration: 2, ease: 'ease'}, 'start+=0.8')
    .to(flagFourth, {x: 196, y: -105, opacity: 1, duration: 2, ease: 'ease'}, 'start+=1.2')
    .to(flagFifth, {x: 220, y: 45, opacity: 1, duration: 2, ease: 'ease'}, 'start+=1.6')
    .to(circle, {rotation: 360, svgOrigin: '450 450', transformOrigin: '50% 50%', duration: 20, repeat: -1, ease: 'linear'}, 'start+=4')
    .to(flagFirst, {rotation: -360, transformOrigin: '50% 50%', duration: 20, repeat: -1, ease: 'linear'}, 'start+=4')
    .to(flagSecond, {rotation: -360, transformOrigin: '50% 50%', duration: 20, repeat: -1, ease: 'linear'}, 'start+=4')
    .to(flagThird, {rotation: -360, transformOrigin: '50% 50%', duration: 20, repeat: -1, ease: 'linear'}, 'start+=4')
    .to(flagFourth, {rotation: -360, transformOrigin: '50% 50%', duration: 20, repeat: -1, ease: 'linear'}, 'start+=4')
    .to(flagFifth, {rotation: -360, transformOrigin: '50% 50%', duration: 20, repeat: -1, ease: 'linear'}, 'start+=4')

  setTimeout(() => {
    tl.play();
  }, 3000);
};

const clearAnimation = () => {
  gsap.to(circle, {clearProps: 'all'})
  gsap.to(flagFirst, {clearProps: 'all'})
  gsap.to(flagSecond, {clearProps: 'all'})
  gsap.to(flagThird, {clearProps: 'all'})
  gsap.to(flagFourth, {clearProps: 'all'})
  gsap.to(flagFifth, {clearProps: 'all'})
};

const initFlagAnimation = () => {
  breakpointChecker()
  breakpointMedia.addListener(breakpointChecker);
};

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    initAnimation();
  } else {
    if (tl) {
      tl.kill();
      clearAnimation();
    }
  }
};

export {initFlagAnimation};
