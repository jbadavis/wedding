import $ from 'jquery';

const isElementInViewport = el => {
    const {top, bottom, left, right} = el.getBoundingClientRect();
    const {innnerHeight, innerWidth} = window;
    const {
        documentElement: {clientHeight, clientWidth},
    } = document;

    return (
        top >= 0 &&
        left >= 0 &&
        bottom <= (innerHeight || clientHeight) &&
        right <= (innerWidth || clientWidth)
    );
};

const initScrollHandler = () => {
    const elmsToAnimate = $('.animate-in');

    return () => {
        elmsToAnimate.each((i, elm) => {
            if (isElementInViewport(elm)) {
                $(elm).addClass('animate');
            }
        });
    };
};

export default initScrollHandler;
