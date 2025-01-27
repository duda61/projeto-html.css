function toggleMode() {
  const html = document.documentElement
  const container = document.getElementById("container")

  // toggle dark mode
  container.classList.toggle("dark-mode")

  // salvar a preferência do usuário
  const isDark = container.classList.contains("dark-mode")
  localStorage.setItem("theme", isDark ? "dark" : "light")
}

// carregar preferência salva
function loadTheme() {
  const savedTheme = localStorage.getItem("theme")
  const container = document.getElementById("container")

  if (savedTheme === "dark") {
    container.classList.add("dark-mode")
  }
}

// carregar tema quando a página iniciar
document.addEventListener("DOMContentLoaded", loadTheme)
