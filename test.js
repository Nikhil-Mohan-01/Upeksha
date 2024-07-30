let lastScrollTop = 0;
let navbarVisible = true;
const navbar = document.getElementById('navbar');
const navbarIcon = document.getElementById('navbar-icon');

function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

function handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Ensure the navbar is always visible when at the top of the page
    if (scrollTop === 0) {
        navbar.style.top = '0';
        navbarVisible = true;
        return;
    }

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (navbarVisible) {
            navbar.style.top = '-100px';
            navbarVisible = false;
        }
    } else {
        // Scrolling up
        if (!navbarVisible) {
            navbar.style.top = '0';
            navbarVisible = true;
        }
    }

    lastScrollTop = scrollTop;
}

function toggleNavbar() {
    if (!navbarVisible) {
        navbar.style.top = '0';
        navbar.style.display = 'flex';
        navbarVisible = true;
    } else {
        navbar.style.display = 'none';
        navbarVisible = false;
    }
}

window.addEventListener('scroll', debounce(handleScroll, 100));
