export class Order {

  constructor(number, customer, products, status) {
    this.number = number;
    this.customer = customer;
    this.products = products;
    this.status = status;
  }

  showOrder() {
    console.log("Замовлення №" + this.number);
  }

}
