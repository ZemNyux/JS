export class Product {

  constructor(name, price, category, manufacturer) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.manufacturer = manufacturer;
    this.inStock = true;
  }

  showInfo() {
    console.log(this.name + " - " + this.price + " грн");
  }

}
