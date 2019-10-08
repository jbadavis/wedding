import $ from 'jquery';
import {parse} from 'url';

const parsePath = path =>
  path
    .split('/')
    .filter(el => el)
    .pop();

const setPage = () => {
  const {path} = parse(window.location.href);

  $('.mj-nav-link').each((i, link) => {
    if (
      parsePath(link.getAttribute('href')) === parsePath(path.toLowerCase())
    ) {
      link.classList.add('current');
    }
  });
};

export default setPage;
