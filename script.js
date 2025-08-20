const hamburger = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });