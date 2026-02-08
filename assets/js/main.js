document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navmenu");
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }
});

const lazyElements = document.querySelectorAll(".lazy-bg");

const lazyObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const bg = el.dataset.bg;

        if (bg) {
          el.style.backgroundImage = `url(${bg})`;
          el.classList.add("loaded");
          observer.unobserve(el);
        }
      }
    });
  },
  {
    rootMargin: "200px",
    threshold: 0.1
  }
);

lazyElements.forEach(el => lazyObserver.observe(el));
