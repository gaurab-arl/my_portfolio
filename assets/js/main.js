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

const navlist = document.querySelectorAll('.link');

navlist.forEach(link => {
  link.addEventListener('click', () => {

    navlist.forEach(item=>{
      item.classList.remove('active-nav');
    });

    link.classList.add('active-nav');

  });
});


const moveupBtn = document.querySelector('.move-up-button');

moveupBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  const homeId = document.getElementById('home-id');
  navlist.forEach(item=>{
    item.classList.remove('active-nav');
  });
  homeId.classList.add('active-nav');
});

