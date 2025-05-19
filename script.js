const toggle = document.getElementById('themeToggle');
const body = document.body;
const knobIcon = document.getElementById('knobIcon');

function updateThemeIcon(isDark) {
  knobIcon.textContent = isDark ? '🌙' : '☀️';
}

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.checked = true;
  updateThemeIcon(true);
} else {
  updateThemeIcon(false);
}

toggle.addEventListener('change', () => {
  const isDark = toggle.checked;
  body.classList.toggle('dark-mode', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
});
