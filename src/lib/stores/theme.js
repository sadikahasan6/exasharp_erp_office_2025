// src/lib/theme.js
/**
 * Applies the current theme.
 * @param {string} theme
 */
export function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    // Default = system preference
    localStorage.removeItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  }
}

/**
 * Initializes the theme globally (should be called on client start)
 */
export function initTheme() {
  if (typeof window === "undefined") return; // SSR safe

  const saved = localStorage.theme;
  const theme = saved === "dark" || saved === "light" ? saved : "default";
  applyTheme(theme);
}
