// KPM website JavaScript
// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('y');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});