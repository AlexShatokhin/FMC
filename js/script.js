$(document).ready(function(){
    $('.carousel').slick({
        dots:true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left_1.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right_1.png"></button>',
    });

    $('.descision_carousel').slick({
        dots:false,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                dots: true
              }
            }
        ]
    });
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.m_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    })
    
  });