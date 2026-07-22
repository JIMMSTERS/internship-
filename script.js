// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dark/light theme toggle with persistence
const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
