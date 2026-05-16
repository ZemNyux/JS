export class Cart {

  constructor(customer, products, totalPrice, status) {
    this.customer = customer;
    this.products = products;
    this.totalPrice = totalPrice;
    this.status = status;
  }

  showCart() {
    console.log("Товарів у кошику: " + this.products.length);
  }

}
