const root = document.documentElement
const mode = document.getElementById("mode")

if (localStorage.theme === "light") {
  root.classList.add("light")
  mode.textContent = "dark"
}

mode.onclick = () => {
  root.classList.toggle("light")
  const isLight = root.classList.contains("light")
  mode.textContent = isLight ? "dark" : "light"
  localStorage.theme = isLight ? "light" : "dark"
}

// Make project items clickable
document.querySelectorAll('.item[data-link]').forEach(item => {
  item.style.cursor = 'pointer'; // Show pointer on hover
  item.addEventListener('click', () => {
    const url = item.getAttribute('data-link');
    window.location.href = url;
  });
});
