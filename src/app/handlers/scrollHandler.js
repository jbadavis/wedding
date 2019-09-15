import $ from 'jquery';

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) 
  );
}

const initScrollHandler = () => {
  const elmsToAnimate = $('.animate-in');

  return () => {
    elmsToAnimate.each((i, elm) => {
      if (isElementInViewport(elm)) {
        $(elm).addClass('animate');
      }
    });
  };
};

export default initScrollHandler;
