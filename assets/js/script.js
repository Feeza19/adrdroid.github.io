// ScrollSpy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbarNav",
});

// Opening Hours
var dayOfWeek = new Date().getDay();
var hours = ["Sunday, 09.00 – 21.00", "Monday, 09.00 – 21.00", "Tuesday, 09.00 – 21.00", "Wednesday, 09.00 – 21.00", "Thursday, 09.00 – 21.00", "Friday, 10.00 – 22.00", "Saturday, 10.00 – 22.00"];
var todaysHours = hours[dayOfWeek];
document.getElementById("hours").innerHTML = todaysHours;

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// AOS
const galleryImage = document.querySelectorAll(".gallery-card");

galleryImage.forEach((img, i) => {
  img.dataset.aos = "zoom-in";
  img.dataset.aosDelay = i * 300;
  img.dataset.aosOffset = "300";
  img.dataset.aosDuration = 1000;
});

AOS.init({
  once: true,
  duration: 1000,
});

// Googl Sheets
const scriptURL = "https://script.google.com/macros/s/AKfycbxG231zrgmxj9atzTQWqLPIDP9l71tCQAKg4tkmgmSnPQdcAvKwxo6Ot7mCEcXcKV93/exec";
const form = document.forms["contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Click Submit Button
  // Show Loading Button, Hide Send Button
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Show Send Button, Hide Loading Button
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      // Show Alert
      myAlert.classList.toggle("d-none");
      // Reset Form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Cookie Consent
window.addEventListener("load", function () {
  window.wpcc.init({
    colors: { popup: { background: "#222433", text: "#ffffff", border: "#555555" }, button: { background: "#2f3042", text: "#ffffff" } },
    position: "bottom",
    padding: "small",
    margin: "none",
  });
});
