import isElementInViewport from './isElementInViewport';

const animateOnScroll = els => {
  [...els].forEach(el => {
    if (isElementInViewport(el)) {
      el.classList.add('show');
    }
  });
};

export default animateOnScroll;
