import { parse } from "url";

const parsePath = path =>
  path
    .split("/")
    .filter(el => el)
    .pop();

const setPage = () => {
  const navLinks = document.getElementsByClassName("mj-nav-link");
  const { path } = parse(window.location.href);

  [...navLinks].forEach(link => {
    if (
      parsePath(link.getAttribute("href")) === parsePath(path.toLowerCase())
    ) {
      link.classList.add("current");
    }
  });
};

export default setPage;
