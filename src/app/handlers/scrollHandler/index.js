import isElementOutOfViewport from './isElementOutOfViewport';
import animateOnScroll from './animateOnScroll';
import initFixRsvp from './fixRsvp';

const initScrollHandler = () => {
  const elsToAnimate = document.getElementsByClassName('animate');
  const scrollDownEl = document.getElementById('scroll-down');

  const fixRsvp = initFixRsvp();

  return () => {
    animateOnScroll(elsToAnimate);
    // fixRsvp();

    scrollDownEl.classList.toggle('hide', isElementOutOfViewport(scrollDownEl));
  };
};

export default initScrollHandler;
