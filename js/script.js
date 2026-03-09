function toggleMobileMenu() {
  document.getElementById("header").classList.toggle("show-mobile-nav");
}

window.addEventListener("scroll", function () {
  const scrollBtn = document.querySelector(".scroll-to-top");
  if (window.scrollY > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
