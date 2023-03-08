const opponentSelect = document.querySelector('#opponent-select');
const opponentButtons = document.querySelectorAll('[id^="opponent"]');

opponentSelect.addEventListener('change', () => {
  const selectedValue = opponentSelect.value;

  // Приховати всі кнопки опонентів
  opponentButtons.forEach(button => {
    button.style.display = 'none';
  });

  // Показати відповідну кількість кнопок опонентів
  for (let i = 0; i < selectedValue; i++) {
    opponentButtons[i].style.display = 'inline-block';
  }
});
