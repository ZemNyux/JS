document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let fullName = document.getElementById('fullName');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');

  let nameError = document.getElementById('nameError');
  let phoneError = document.getElementById('phoneError');
  let addressError = document.getElementById('addressError');

  let isValid = true;

  let nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ']{2,}\s[a-zA-Zа-яА-ЯіІїЇєЄґҐ']{2,}/;
  if (!nameRegex.test(fullName.value.trim())) {
    nameError.style.display = 'block';
    fullName.classList.add('invalid-input');
    isValid = false;
  } else {
    nameError.style.display = 'none';
    fullName.classList.remove('invalid-input');
  }

  let phoneRegex = /^(\+38)?0\d{9}$/;
  if (!phoneRegex.test(phone.value.replace(/\s+/g, ''))) {
    phoneError.style.display = 'block';
    phone.classList.add('invalid-input');
    isValid = false;
  } else {
    phoneError.style.display = 'none';
    phone.classList.remove('invalid-input');
  }

  if (address.value.trim() === '') {
    addressError.style.display = 'block';
    address.classList.add('invalid-input');
    isValid = false;
  } else {
    addressError.style.display = 'none';
    address.classList.remove('invalid-input');
  }

  if (isValid) {
    let formData = new FormData(e.target);

    let orderDetails = {};
    formData.forEach((value, key) => {
      orderDetails[key] = value;
    });

    orderDetails.wantRegister = formData.has('wantRegister') ? 'Так' : 'Ні';
    orderDetails.noCall = formData.has('noCall') ? 'Так' : 'Ні';

    console.log("=== ДАНІ ЗАМОВЛЕННЯ УСПІШНО ВАЛІДОВАНІ ТА ВІДПРАВЛЕНІ ===");
    console.log(orderDetails);

    alert("Замовлення успішно оформлено! Результат відправки дивись у консолі (F12).");
  }
});
