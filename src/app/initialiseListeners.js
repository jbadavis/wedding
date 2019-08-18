import $ from 'jquery';
import headerHandler from './handlers/headerHandler';

const initialiseListeners = () => {
  $('.mj-header-button-wrapper').click(headerHandler);
};

export default initialiseListeners;
