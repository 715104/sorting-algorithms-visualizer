const toggleDarkMode = (isDarkMode) => {
    localStorage.setItem('darkMode', !isDarkMode);
    return !isDarkMode;
};

export default toggleDarkMode;