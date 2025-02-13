// Отримуємо всі елементи списку
const questionItems = document.querySelectorAll('.question-item');

// Додаємо обробник подій для кожного елемента списку
questionItems.forEach((item) => {
  const icon = item.querySelector('.icon-question use');
    const questionText = item.querySelector('.question-item-text');
    
  // При завантаженні сторінки текст має бути закритим
    if (questionText) {
    questionText.style.display = 'none';
  }
  icon.setAttribute('href', './img/icons.svg#icon-plus-circle');

  // Встановлюємо обробник кліку на іконку
  item.addEventListener('click', () => {
    // Перевіряємо, чи текст вже відкритий
    const isOpen = icon.getAttribute('href').includes('icon-minus-circle');

    if (isOpen) {
      // Закриваємо текст і змінюємо іконку на "icon-plus-circle"
      icon.setAttribute('href', './img/icons.svg#icon-plus-circle');
      if (questionText) {
        questionText.style.display = 'none';
      }
    } else {
      // Закриваємо всі інші елементи
      questionItems.forEach((otherItem) => {
        const otherIcon = otherItem.querySelector('.icon-question use');
        const otherText = otherItem.querySelector('.question-item-text');
        
        otherIcon.setAttribute('href', './img/icons.svg#icon-plus-circle');
        if (otherText) {
          otherText.style.display = 'none';
        }
      });

      // Відкриваємо текст і змінюємо іконку на "icon-minus-circle"
      icon.setAttribute('href', './img/icons.svg#icon-minus-circle');
      if (questionText) {
        questionText.style.display = 'block';
      }
    }
  });
});