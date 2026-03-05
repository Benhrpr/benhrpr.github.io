document.addEventListener("DOMContentLoaded", function() {
  const el = document.getElementById("typed-name");
  if (!el) return;

  // For testing, use a hardcoded name first
  const first = "Ben";
  const middle = "";
  const last = "Harper";

  const fullName = (first + " " + middle + " " + last).trim();

  let i = 0;
  const speed = 30;

  function type() {
    if (i < fullName.length) {
      const currentText = fullName.substring(0, i + 1);

      if (currentText.length <= first.length) {
        el.innerHTML = "<span class='font-weight-bold'>" + currentText + "</span>";
      } else {
        el.innerHTML =
          "<span class='font-weight-bold'>" + first + "</span>" +
          currentText.substring(first.length);
      }

      i++;
      setTimeout(type, speed);
    }
  }

  type();
});
