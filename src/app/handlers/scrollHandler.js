import $ from 'jquery';

const isElementInViewport = (el, offset = 0.8) => {
  const {top} = el.getBoundingClientRect();
  const {innerHeight} = window;

  return top <= innerHeight * offset;
};

const isElementOutOfViewport = el => {
  const {bottom} = el.getBoundingClientRect();
  const {innerHeight} = window;

  return bottom <= innerHeight * 0.7;
};

const initScrollHandler = () => {
  const $elsToAnimate = $('.animate');
  const $scrollDownEl = $('.mj-scroll-down');

  return () => {
    $elsToAnimate.each((i, el) => {
      if (isElementInViewport(el)) {
        el.classList.add('show');
      }
    });

    $scrollDownEl.toggleClass('hide', isElementOutOfViewport($scrollDownEl[0]));
  };
};

export default initScrollHandler;
