let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const navbarIcon = document.getElementById('navbar-icon');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px'; // Hide navbar
    } else {
        navbar.style.top = '0'; // Show navbar
    }
    lastScrollTop = scrollTop;
});

function toggleNavbar() {
    if (navbar.style.display === 'none' || navbar.style.top === '-100px') {
        navbar.style.display = 'flex';
        navbar.style.top = '0';
    } else {
        navbar.style.display = 'none';
    }
}
