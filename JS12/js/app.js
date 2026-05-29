document.getElementById('orderForm').addEventListener('submit', function(e) {
  // 1. Зупиняємо перезавантаження сторінки
  e.preventDefault();

  // Отримуємо доступ до полів та блоків помилок
  let fullName = document.getElementById('fullName');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');

  let nameError = document.getElementById('nameError');
  let phoneError = document.getElementById('phoneError');
  let addressError = document.getElementById('addressError');

  // Прапорці валідації
  let isValid = true;

  // 2. ВАЛІДАЦІЯ ПІБ (має бути мінімум два слова, наприклад "Іван Іванов")
  let nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ']{2,}\s[a-zA-Zа-яА-ЯіІїЇєЄґҐ']{2,}/;
  if (!nameRegex.test(fullName.value.trim())) {
    nameError.style.display = 'block';
    fullName.classList.add('invalid-input');
    isValid = false;
  } else {
    nameError.style.display = 'none';
    fullName.classList.remove('invalid-input');
  }

  // 3. ВАЛІДАЦІЯ ТЕЛЕФОНУ (український формат: +380 або 0...)
  let phoneRegex = /^(\+38)?0\d{9}$/;
  if (!phoneRegex.test(phone.value.replace(/\s+/g, ''))) { // прибираємо випадкові пробіли
    phoneError.style.display = 'block';
    phone.classList.add('invalid-input');
    isValid = false;
  } else {
    phoneError.style.display = 'none';
    phone.classList.remove('invalid-input');
  }

  // 4. ВАЛІДАЦІЯ АДРЕСИ (просто перевірка на пустий рядок)
  if (address.value.trim() === '') {
    addressError.style.display = 'block';
    address.classList.add('invalid-input');
    isValid = false;
  } else {
    addressError.style.display = 'none';
    address.classList.remove('invalid-input');
  }

  // 5. ЯКЩО ВСЕ ПРАВИЛЬНО — ЗБИРАЄМО ДАНІ В КОНСОЛЬ
  if (isValid) {
    // Використовуємо сучасний інструмент FormData для збору всіх полів форми
    let formData = new FormData(e.target);

    // Перетворюємо FormData у звичайний гарний JS-об'єкт
    let orderDetails = {};
    formData.forEach((value, key) => {
      orderDetails[key] = value;
    });

    // Окремо обробляємо статус чекбоксів, якщо вони не були відмічені
    orderDetails.wantRegister = formData.has('wantRegister') ? 'Так' : 'Ні';
    orderDetails.noCall = formData.has('noCall') ? 'Так' : 'Ні';

    console.log("=== ДАНІ ЗАМОВЛЕННЯ УСПІШНО ВАЛІДОВАНІ ТА ВІДПРАВЛЕНІ ===");
    console.log(orderDetails);

    alert("Замовлення успішно оформлено! Результат відправки дивись у консолі (F12).");
  }
});
