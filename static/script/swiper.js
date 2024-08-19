
 const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
     loop: true,
     centeredSlides: true,
     centeredSlidesBounds: true,
     grabCursor: true,
     spaceBetween: 15,
     slidesPerView: 1.5,
     autoplay: {
         delay: 5000,
     },

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