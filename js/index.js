var logo = document.getElementById("logo");
var menuBtn = document.getElementById("menuu");
var nav = document.querySelector("nav");
var clo = document.querySelector(".close");
var loader = document.querySelector(".loader-bg");
var loader2 = document.querySelector(".loader");
var body = document.querySelector("body");

window.onload = function (e) {
  loader.parentNode.removeChild(loader);
  body.classList.remove("hidden");
  tl.from(".fist", {
    y: "-30%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
  });
  tl.from(
    ".content",
    {
      y: "-30%",
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    },
    "-=1.5"
  );
  tl.from(
    ".stagger1",
    {
      opacity: 0,
      y: -50,
      stagger: 0.3,
      ease: Power4.easeOut,
      duration: 2,
    },
    "-=2.0"
  );
  tl.from(
    ".hero-json",
    {
      opacity: 0,
      y: 150,
      ease: Power4.easeOut,
      duration: 2,
    },
    "-=2.0"
  );
  if (screen.width >= 1050) {
    logo.src = "/images/logo web.svg";
  } else {
    logo.src = "/images/logo mobil.svg";
  }
};

window.onresize = function (e) {
  if (screen.width >= 1050) {
    logo.src = "/images/logo web.svg";
  } else {
    logo.src = "/images/logo mobil.svg";
  }
};

menuBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
  nav.classList.add("open");
});

clo.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
