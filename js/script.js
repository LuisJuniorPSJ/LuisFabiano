window.sr = ScrollReveal({ reset: true });

sr.reveal(".title", { origin: "right", distance: "80px", duration: 1500 });

sr.reveal(".img_edit", { origin: "right", distance: "80px", duration: 1500 });

sr.reveal(".my_profile", { origin: "right", distance: "80px", duration: 1500 });

sr.reveal(".content-text", {
  origin: "right",
  distance: "80px",
  duration: 1500,
});

sr.reveal(".content-tecs", {
  origin: "right",
  distance: "80px",
  duration: 1500,
});

sr.reveal(".card-content", {
  origin: "right",
  distance: "80px",
  duration: 1500,
});

//Menu Mobile
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

const menuItems = document.querySelectorAll("a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});
