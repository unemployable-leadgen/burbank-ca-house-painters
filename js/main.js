// Burbank Pro Painters Co.: mobile nav toggle + quote form submission

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
      var expanded = header.classList.contains("nav-open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  var forms = document.querySelectorAll(".quote-form");
  forms.forEach(function (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) {
        status.textContent = "Sending your request...";
        status.className = "form-status show";
      }

      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            if (status) {
              status.textContent = "Thanks! We got your request and will call you back shortly.";
              status.className = "form-status show ok";
            }
          } else {
            if (status) {
              status.textContent = "Something went wrong. Please call us instead at (857) 371-3693.";
              status.className = "form-status show err";
            }
          }
        })
        .catch(function () {
          if (status) {
            status.textContent = "Something went wrong. Please call us instead at (857) 371-3693.";
            status.className = "form-status show err";
          }
        });
    });
  });
});
