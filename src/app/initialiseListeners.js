import $ from 'jquery';
import initHeaderHandler from './handlers/headerHandler';
import initScrollHandler from './handlers/scrollHandler';

const initialiseListeners = () => {
  const scrollHandler = initScrollHandler();
  const headerHandler = initHeaderHandler();

  scrollHandler();

  $(window).scroll(scrollHandler);
  $('.mj-header-button-wrapper').click(headerHandler);
};

export default initialiseListeners;
