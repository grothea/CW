
 //hamburger menu toggle
function classToggle() {
  const navs = document.querySelectorAll('.navbar-items');
  const dropdownDiv = document.getElementById('dropdown');
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
document.querySelector('.navbar-toggle').addEventListener('click', classToggle);
// window.scrollTo(0,document.body.scrollHeight);
// make mobile version nav bar all JS, hamburger to X, scroll
