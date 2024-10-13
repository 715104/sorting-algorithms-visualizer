const toggleDarkMode = (isDarkMode) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('darkMode', !isDarkMode);
  }
  return !isDarkMode;
};

export default toggleDarkMode;
