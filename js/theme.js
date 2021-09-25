// Get from local storage
const theme = localStorage.getItem('theme');
if (theme == null) {
  setTheme('light');
} else setTheme(theme);

const themeDots = document.querySelectorAll('.theme-dot');
themeDots.forEach((theme) => {
  // with arrow fn: this here - the window object
  theme.addEventListener('click', function () {
    const mode = this.dataset.mode;
    setTheme(mode);
  });
});

function setTheme(mode) {
  let themeLink = document.getElementById('theme-style');
  switch (mode) {
    case 'dark':
      themeLink.setAttribute('href', 'color-themes/dark.css');
      break;
    default:
      themeLink.setAttribute('href', '');
  }
  // Save to local storage
  localStorage.setItem('theme', mode);
}
