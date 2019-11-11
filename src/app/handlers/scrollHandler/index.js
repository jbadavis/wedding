import isElementInViewport from './isElementInViewport';
import isElementOutOfViewport from './isElementOutOfViewport';
import animateOnScroll from './animateOnScroll';

const initScrollHandler = () => {
  const elsToAnimate = document.getElementsByClassName('animate');
  const scrollDownEl = document.getElementById('scroll-down');
  const rsvpEl = document.getElementById('rsvp');
  const footerEl = document.getElementById('footer');

  return () => {
    animateOnScroll(elsToAnimate);

    rsvpEl.classList.toggle('hide', isElementInViewport(footerEl));
    scrollDownEl.classList.toggle('hide', isElementOutOfViewport(scrollDownEl));
  };
};

export default initScrollHandler;
