// let banner = document.querySelector('.banner');
// banner.addEventListener('click', function (event) {
//     alert('Element clicked through function!');
// });




// new Swiper(swiperContainer, parameters);

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});





let non_mask = document.querySelector('.swiper-button-next.swiper-button-disabled');