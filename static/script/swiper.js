
 const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
     loop: true,
     centeredSlides: true,
     grabCursor: true,
     spaceBetween: 15,
     slidesPerView: 1.5,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    
});