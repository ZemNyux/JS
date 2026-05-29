function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(nameEQ)) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}

if (getCookie("cart_items") === null) {
  const demoCart = [
    { id: 101, title: "Зимова куртка Staff Black", price: 1850, quantity: 1 },
    { id: 204, title: "Худі Staff Over", price: 950, quantity: 2 }
  ];
  setCookie("cart_items", JSON.stringify(demoCart), 7);
}

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

    let savedCartRaw = getCookie("cart_items");
    let finalCart = JSON.parse(savedCartRaw);

    orderDetails.products = finalCart;

    console.log("=== ФІНАЛЬНЕ ЗАМОВЛЕННЯ СФОРМОВАНО ===");
    console.log(orderDetails);

    alert("Дякуємо! Замовлення успішно згенеровано разом із товарами з Кукі-кошика. Перевір консоль (F12)!");
  }
});
