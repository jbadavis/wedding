import clickToScrollHandler from "./handlers/clickToScrollHandler";
import scrollHandler from "./handlers/scrollHandler/";
import keyDownHandler from "./handlers/keyDownHandler";
import mainClickHandler from "./handlers/mainClickHandler";

import Navigation from "./handlers/navigation";

const initialiseListeners = () => {
  const initialisedScrollHandler = scrollHandler();

  const headerButton = document.getElementById("nav-toggle");
  const scrollDown = document.getElementById("scroll-down");
  const mainEl = document.getElementById("main");

  const navigation = new Navigation();

  initialisedScrollHandler();

  document.onkeydown = keyDownHandler(navigation);

  window.addEventListener("scroll", initialisedScrollHandler);
  scrollDown.addEventListener("click", clickToScrollHandler);
  headerButton.addEventListener("click", navigation.toggle);
  mainEl.addEventListener("click", mainClickHandler(navigation));
};

export default initialiseListeners;
