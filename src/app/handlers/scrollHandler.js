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
  const elsToAnimate = document.getElementsByClassName('animate');
  const scrollDownEl = document.getElementById('scroll-down');

  return () => {
    [...elsToAnimate].forEach(el => {
      if (isElementInViewport(el)) {
        el.classList.add('show');
      }
    });

    scrollDownEl.classList.toggle('hide', isElementOutOfViewport(scrollDownEl));
  };
};

export default initScrollHandler;
