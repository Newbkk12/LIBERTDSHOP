document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    const banner = document.querySelector(".banner");

    window.addEventListener("scroll", function() {
        if (window.scrollY > header.clientHeight) {
            nav.classList.add("fixed");
            banner.style.marginTop = `${nav.clientHeight}px`;
        } else {
            nav.classList.remove("fixed");
            banner.style.marginTop = "0";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });

        currentIndex = index;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            showSlide(index);
        });
    });

    showSlide(currentIndex); // แสดงสไลด์แรกเมื่อโหลดหน้าเว็บ
});
// JavaScript
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// เมื่อหน้าโหลด
window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
    } else {
        menuToggle.style.display = 'none';
        menu.classList.remove('active');
    }
});

// เมื่อปรับขนาดหน้าจอ
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
    } else {
        menuToggle.style.display = 'none';
        menu.classList.remove('active');
    }
});
// เลือกทุกปุ่ม "กดไปทางซ้าย" และ "กดไปทางขวา"
const prevButtons = document.querySelectorAll('.prev-button');
const nextButtons = document.querySelectorAll('.next-button');

// ให้แต่ละปุ่มทำงานเมื่อคลิก
prevButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const productImages = event.target.parentElement.querySelector('.product-images');
        scrollLeft(productImages);
    });
});

nextButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const productImages = event.target.parentElement.querySelector('.product-images');
        scrollRight(productImages);
    });
});

// ฟังก์ชันเลื่อนรูปไปทางซ้าย
function scrollLeft(element) {
    element.scrollBy({
        left: -100, // ปรับตามความเหมาะสม
        behavior: 'smooth', // เพื่อให้มีการเลื่อนอย่างนุ่มนวล
    });
}

// ฟังก์ชันเลื่อนรูปไปทางขวา
function scrollRight(element) {
    element.scrollBy({
        left: 100, // ปรับตามความเหมาะสม
        behavior: 'smooth', // เพื่อให้มีการเลื่อนอย่างนุ่มนวล
    });
}
