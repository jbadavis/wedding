const mainClickHandler = navigation => () => {
  if (navigation.navOpen) {
    navigation.close();
  }
};

export default mainClickHandler;
