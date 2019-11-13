import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const NAV_OPEN_CLASS = 'nav-open';

class Navigation {
  navOpen = false;
  navEl = document.getElementById('nav');
  htmlEl = document.getElementsByTagName('html')[0];
  mainEl = document.getElementById('main');

  enableScroll() {
    enableBodyScroll(this.navEl);
  }

  disableScroll() {
    disableBodyScroll(this.navEl);
  }

  open = () => {
    this.htmlEl.classList.add(NAV_OPEN_CLASS);

    this.disableScroll();

    this.navOpen = true;
  }

  close = () => {
    this.htmlEl.classList.remove(NAV_OPEN_CLASS);

    this.enableScroll();

    this.navOpen = false;
  }

  toggle = () => {
    if (this.navOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

export default Navigation;
