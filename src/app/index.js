import setPage from './setPage';
import initialiseListeners from './initialiseListeners';
import initialiseAnimations from './initialiseAnimations';

(() => {
  setPage();
  initialiseAnimations();
  initialiseListeners();
})();
