$(document).ready(function () {
    $('.strategies-list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,          // Автоматичне прокручування слайдів
        autoplaySpeed: 3000,     // Час (в мілісекундах) між авто-прокруткою
        slidesToShow: 3, // За замовчуванням 3 слайд
        slidesToScroll: 1, // Перегортається по 1 слайду
        responsive: [
            // {
            //     breakpoint: 1024, // Для планшетів (1024px і менше)
            //     settings: {
            //         slidesToShow: 3, // Показує 2 слайди
            //         slidesToScroll: 1, // Перегортає одразу 2
            //     }
            // },
            {
                breakpoint: 1150, // Для мобільних (1150px і менше)
                settings: {
                    slidesToShow: 1, // Повертаємо 1 слайд
                    slidesToScroll: 1 // Перегортаємо по 1
                }
            }
        ]
    });
});






// $(document).ready(function () {
//     function initSlider() {
//         if ($(window).width() < 1150) { // Якщо ширина менше 1200px
//             if (!$('.strategies-list').hasClass('slick-initialized')) {
//                 $('.strategies-list').slick({
//                     dots: true,
//                     infinite: true,
//                     speed: 500,
//                     autoplay: true,          // Автоматичне прокручування слайдів
//                     autoplaySpeed: 3000,     // Час (в мілісекундах) між авто-прокруткою
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     responsive: [
//                         {
//                             breakpoint: 768,
//                             settings: {
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1
//                             }
//                         }
//                     ]
//                 });
//             }
//         } else { 
//             if ($('.strategies-list').hasClass('slick-initialized')) {
//                 $('.strategies-list').slick('unslick'); // Видаляємо слайдер
//             }
//         }
//     }

//     initSlider(); // Викликаємо функцію при завантаженні
//     $(window).resize(initSlider); // Викликаємо при зміні розміру вікна
// });