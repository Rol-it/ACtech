// Theme toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.documentElement.dataset.theme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
});

// Scroll animations
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

// Attendance logic
const form = document.getElementById("attendanceForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  if (!name) return;

  const tbody = document.getElementById("attendanceTable");
  const row = document.createElement("tr");
  row.classList.add("new-row");
  const now = new Date();
  row.innerHTML = `<td>${name}</td><td>Present</td><td>${now.toLocaleTimeString()}</td>`;
  tbody.appendChild(row);

  setTimeout(() => row.classList.remove("new-row"), 1000);
  form.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
