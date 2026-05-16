export class Manufacturer {

  constructor(name, country, year, website) {
    this.name = name;
    this.country = country;
    this.year = year;
    this.website = website;
  }

  showManufacturer() {
    console.log(this.name + " (" + this.country + ")");
  }

}
