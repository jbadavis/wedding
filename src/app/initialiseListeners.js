import $ from 'jquery';
import headerHandler from './handlers/headerHandler';
import initScrollHandler from './handlers/scrollHandler';

const initialiseListeners = () => {
  const scrollHandler = initScrollHandler();

  scrollHandler()

  $(window).scroll(scrollHandler);
  $('.mj-header-button-wrapper').click(headerHandler);
};

export default initialiseListeners;
