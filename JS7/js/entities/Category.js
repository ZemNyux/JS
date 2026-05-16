export class Category {

  constructor(name, description, id, productsCount) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.productsCount = productsCount;
  }

  showCategory() {
    console.log("Категорія: " + this.name);
  }

}
