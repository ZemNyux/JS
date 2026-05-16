export class Customer {

  constructor(name, email, age, phone) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.phone = phone;
  }

  showCustomer() {
    console.log("Покупець: " + this.name);
  }

}
