import headerHandler from './handlers/headerHandler';
import clickToScrollHandler from './handlers/clickToScrollHandler';
import scrollHandler from './handlers/scrollHandler/';

const initialiseListeners = () => {
  const initialisedScrollHandler = scrollHandler();
  const headerButton = document.getElementById('nav-toggle');
  const scrollDown = document.getElementById('scroll-down');

  initialisedScrollHandler();

  window.addEventListener('scroll', initialisedScrollHandler);
  headerButton.addEventListener('click', headerHandler());
  scrollDown.addEventListener('click', clickToScrollHandler);
};

export default initialiseListeners;
