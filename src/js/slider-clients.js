
$(document).ready(function () {
  function initSlider() {
    if ($(window).width() < 1150) {
      // Якщо ширина менше 1150px
      if (!$(".clients-list").hasClass("slick-initialized")) {
        $(".clients-list").slick({
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true, // Автоматичне прокручування слайдів
          autoplaySpeed: 3000, // Час (в мілісекундах) між авто-прокруткою
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      }
    } else {
      if ($(".clients-list").hasClass("slick-initialized")) {
        $(".clients-list").slick("unslick"); // Видаляємо слайдер
      }
    }
  }

  initSlider(); // Викликаємо функцію при завантаженні

  // Використовуємо сучасний метод підписки на зміну розміру вікна
  $(window).on("resize", function () {
    initSlider();
  });
});
