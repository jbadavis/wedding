import scrollIntoView from 'scroll-into-view';

const scrollDownHandler = () => {
  const firstSectionEl = document.getElementsByClassName('mj-section')[1];

  scrollIntoView(firstSectionEl, {time: 1600});
};

export default scrollDownHandler;
