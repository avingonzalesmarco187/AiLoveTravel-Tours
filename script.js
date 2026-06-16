document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-fade");

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navAnchors = document.querySelectorAll(".nav-links a");

  navAnchors.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    revealElements.forEach((element) => {
      const top = element.getBoundingClientRect().top;
      if (top < triggerBottom) {
        element.classList.add("visible");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  const bubbleContainer = document.querySelector(".bubbles");
  if (bubbleContainer) {
    for (let i = 0; i < 18; i++) {
      const bubble = document.createElement("span");
      bubble.className = "bubble";
      const size = Math.random() * 30 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
      bubble.style.animationDelay = `${Math.random() * 8}s`;
      bubbleContainer.appendChild(bubble);
    }
  }

  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox img");
  const lightboxClose = document.querySelector(".lightbox-close");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (lightbox && lightboxImage && img) {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.classList.add("active");
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox) {
      lightbox.classList.remove("active");
    }
  });
});
