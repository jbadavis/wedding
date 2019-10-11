import headerHandler from './handlers/headerHandler';
import scrollHandler from './handlers/scrollHandler';

const initialiseListeners = () => {
  const initialisedScrollHandler = scrollHandler()
  const headerButton = document.getElementById(
    'nav-toggle',
  );

  initialisedScrollHandler()

  window.addEventListener('scroll', initialisedScrollHandler);
  headerButton.addEventListener('click', headerHandler());
};

export default initialiseListeners;
