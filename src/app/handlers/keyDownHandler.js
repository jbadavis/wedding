const keyDownHandler = navigation => e => {
  if (e.key === 'Escape' && navigation.navOpen) {
    navigation.close();
  }
};

export default keyDownHandler;
