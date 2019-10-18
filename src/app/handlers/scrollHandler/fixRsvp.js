const initFixRsvp = () => {
  const rsvpEl = document.getElementById('rsvp');
  const footerEl = document.getElementById('footer');
  const {bottom: rsvpBottom} = rsvpEl.getBoundingClientRect();

  return () => {
    const {top: footerTop} = footerEl.getBoundingClientRect();

    const rsvpCssBottom = parseInt(getComputedStyle(rsvpEl).bottom);

    const diff = footerTop - rsvpBottom;

    if (diff < rsvpCssBottom) {
      rsvpEl.style.transform = `translateY(-${rsvpCssBottom - diff}px)`;
    } else {
      rsvpEl.style.transform = `translateY(0)`;
    }
  };
};

export default initFixRsvp;
