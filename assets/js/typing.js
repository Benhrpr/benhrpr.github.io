document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("typed-name");
  if (!el) return;

  const first = "{{ site.first_name }}";
  const middle = "{{ site.middle_name }}";
  const last = "{{ site.last_name }}";

  const fullName = (first + " " + middle + " " + last).trim();

  let i = 0;
  const speed = 60;

  function type() {
    if (i < fullName.length) {
      const currentText = fullName.substring(0, i + 1);

      if (currentText.length <= first.length) {
        el.innerHTML =
          "<span class='font-weight-bold'>" + currentText + "</span>";
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
