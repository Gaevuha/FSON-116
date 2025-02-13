import '../rateYo-2.3.4/src/jquery.rateyo.js';



$(document).ready(function () {
  $(".rating").each(function () {
    var $rating = $(this);
    var initialRating = $rating.data("rating"); // Початковий рейтинг для кожної окремої зірки
    var $ratingValue = $rating.next().find(".rating-value");

    $rating.rateYo({
      rating: 4,
      starWidth: "18px", // Розмір зірки
      numStars: 5,       // Кількість зірок
      // fullStar: true,    // Повні зірки
        onSet: function (rating) {
        $ratingValue.text(rating); // Оновлюємо текст при зміні рейтингу
        $rating.data("rating", rating); // Оновлюємо дані для кожного елемента
      }
    });

    // Оновлюємо значення рейтингу на основі наданого при завантаженні
    $ratingValue.text(initialRating);
  });
});

// $(document).ready(function () {
//   $(".rating").rateYo({
//     starSvg:
//       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.4 5.82 22 7 14.14 2 9.27l6.91-1L12 2z" stroke="yellow" stroke-width="2" fill="white"/></svg>',
//     normalFill: "white",   // Колір зірок по замовчуванню (білі)
//     ratedFill: "yellow",   // Колір зірок після оцінки (жовті)
//     starWidth: "30px",     // Розмір зірки
//     fullStar: true,
//     onSet: function (rating) {
//       // Оновлюємо елемент, що показує рейтинг
//       $(".rating-value").text(rating); // Рейтинг буде відображатись у елементі з класом .rating-value
//     }
//   });
// });