// ================= TABS =================
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".section").forEach(s => s.style.display = "none");
    document.getElementById(btn.dataset.target).style.display = "block";
  });
});

// ================= HERO SCROLL =================
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("bootstrap").scrollIntoView({ behavior: "smooth" });
});

// ================= THEME TOGGLE =================
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.innerHTML = document.body.classList.contains("light")
    ? '<i class="bi bi-sun"></i>'
    : '<i class="bi bi-moon-stars"></i>';
});

// ================= SCROLL ANIMATIONS =================
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("show");
  });
});
