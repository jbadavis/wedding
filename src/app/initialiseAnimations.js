import $ from 'jquery';

const groups = (elms) => {
  $('.animate-group').each((i, group) => {
    $(group).children().each((i, child) => {
      child.style.transitionDelay = `${0.4 * i}s`;
    });
  });
};

const initialiseAnimations = () => {
  groups();
};

export default initialiseAnimations;
