// var mySwiper = new Swiper('.swiper-container', {
//     autoplay: {
// 		delay: 3000,
// 		stopOnLastSlide: false,
// 		disableOnInteraction: false,
// 		reverseDirection: false
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev'
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'bullets',
// 		clickable: true
// 	}
// });

const img_src_list = ['img/mv001.jpg', 'img/mv002.jpg', 'img/mv003.jpg'];
let num = -1;

function slide_time() {
    if (num === 2) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById('slide-img').src = img_src_list[num];
}

setInterval(slide_time, 2000);