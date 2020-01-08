const isElementInViewport = el => {
  const { top } = el.getBoundingClientRect();
  const { innerHeight } = window;
  const offset = el.getAttribute("data-animation-offset") || 0.8;

  return top <= innerHeight * offset;
};

export default isElementInViewport;
