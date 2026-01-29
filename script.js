const toggle = document.querySelector(".theme-toggle");
const icon = document.querySelector(".theme-toggle__icon");
const label = document.querySelector(".theme-toggle__label");

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") {
    icon.textContent = "🌙";
    label.textContent = "Dark";
  } else {
    icon.textContent = "☀️";
    label.textContent = "Light";
  }
};

applyTheme(initialTheme);

toggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
  applyTheme(nextTheme);
});
