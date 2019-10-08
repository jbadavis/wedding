import $ from 'jquery';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const initHeaderHandler = () => {
  const targetElement = $('#nav')[0];
  const $body = $('html');

  let navOpen = false;

  return () => {
    $body.toggleClass('nav-open');

    if (navOpen) {
      enableBodyScroll(targetElement);
    } else {
      disableBodyScroll(targetElement);
    }

    navOpen = !navOpen;
  };
};

export default initHeaderHandler;
