const scrollingHeader = document.querySelector('.onheader');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
let lastScrollY = window.scrollY;

function updateElementsPosition() {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY) {
        scrollingHeader.style.top = '-100px';
        menu.style.top = '-100px';
        logo.style.top = '-100px';
    } else {
        scrollingHeader.style.top = '0';
        menu.style.top = '0';
        logo.style.top = '0';
    }

    lastScrollY = scrollY;
}

window.addEventListener('scroll', updateElementsPosition);
