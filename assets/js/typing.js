document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("typed-name");
  if (!el) return;

  const text = el.textContent.trim();
  el.textContent = "";

  let i = 0;
  const speed = 80; // typing speed (lower = faster)

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
});