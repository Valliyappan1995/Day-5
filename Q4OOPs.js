//write a class to calculate the uber price.

class UberPrice {
    constructor() {
        this.basePrice = 5;
        this.kilometer = 10;
    }

    get TotalPrice() {
        return this.basePrice * this.kilometer;
    }
}

const Uberprice = new UberPrice();
console.log(Uberprice);
