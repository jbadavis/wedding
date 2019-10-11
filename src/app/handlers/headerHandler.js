import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const initHeaderHandler = () => {
  const navEl = document.getElementById('nav');
  const htmlEl = document.getElementsByTagName('html')[0];

  let navOpen = false;

  return () => {
    htmlEl.classList.toggle('nav-open');

    if (navOpen) {
      enableBodyScroll(navEl);
    } else {
      disableBodyScroll(navEl);
    }

    navOpen = !navOpen;
  };
};

export default initHeaderHandler;
