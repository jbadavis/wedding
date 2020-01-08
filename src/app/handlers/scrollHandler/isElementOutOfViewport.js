const isElementOutOfViewport = el => {
  const { bottom } = el.getBoundingClientRect();
  const { innerHeight } = window;

  return bottom <= innerHeight * 0.7;
};

export default isElementOutOfViewport;
