const setCustomHeight = () => {
  // Catch the vh value and convert in unit
  const vh = window.innerHeight * 0.01;
  // Set our own property with this vh
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export { setCustomHeight };
