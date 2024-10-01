const full_nav_menu = document.querySelector('.full_nav_menu');
document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        full_nav_menu.classList.add('header_toggle');
    } else {
        full_nav_menu.classList.remove('header_toggle');
    }
});

var swiper = new Swiper(".mySwiper", {
    loop: "true",
    autoplay: {
        delay: 5500,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",

    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// header part start 
$(document).ready(function () {
    $('.nav_menu_icon').click(function () {
        $('.nav_menu_item').toggle();
    });



});


$(document).ready(function () {
    $('.Pricing_feedBack_area_item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

$(document).ready(function () {

    $('.testimonial_slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 852,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
});
new VenoBox({
    selector: '.my-video-links',
});

new WOW().init();

$('.counter').countUp({
    'time': 4000,
    'delay': 10
});

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});




const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        if (header.classList.contains('active')) {
            content.style.display = 'none';
            header.classList.remove('active');
        } else {
            content.style.display = 'block';
            header.classList.add('active');
        }
    });
});