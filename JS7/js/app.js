import { Product } from "./entities/Product.js";
import { Category } from "./entities/Category.js";
import { Manufacturer } from "./entities/Manufacturer.js";
import { Cart } from "./entities/Cart.js";
import { Customer } from "./entities/Customer.js";
import { Order } from "./entities/Order.js";

let category1 = new Category("Телефони", "Смартфони та гаджети", 1, 10);

let manufacturer1 = new Manufacturer(
  "Samsung",
  "Корея",
  1938,
  "samsung.com"
);

let product1 = new Product(
  "Galaxy S24",
  45000,
  category1,
  manufacturer1
);

let customer1 = new Customer(
  "Микита",
  "test@gmail.com",
  18,
  "+380000000000"
);

let cart1 = new Cart(
  customer1,
  [product1],
  45000,
  "Активний"
);

let order1 = new Order(
  101,
  customer1,
  [product1],
  "Оплачено"
);

product1.showInfo();
category1.showCategory();
manufacturer1.showManufacturer();
customer1.showCustomer();
cart1.showCart();
order1.showOrder();
