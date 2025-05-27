// Theme Toggle
document.getElementById('theme-toggle').addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
