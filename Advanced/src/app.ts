// interface Transporter {
//     model: string;
//     hp: number;
//     price: number;
//     seats: string;
//     color: string; 
// }

class Vehicles {

    constructor( public model: string, 
                 public hp: number, 
                 public price: number, 
                 public seats: number, 
                 public color: string ) {

    }

    getInfo() {
        return `Model: ${this.model}
                Horsepower: ${this.hp}
                Price: ${this.price}
                Seats: ${this.seats}
                Color: ${this.color}`
    }
}

// let myVehicle = new Vehicles ("Tesla", 600, 70000, 5, "black");

class Car extends Vehicles {
    
    constructor(public type: string, model: string, hp: number, price: number, seats: number, color: string) {
        super(model, hp, price, seats, color)
    }

    getInfo() {
        return `Type: ${this.type}
                ${super.getInfo()}`
    }
}

// let myCar = new Car ("Electro-Car", "Tesla", 600, 70000, 5, "red");

class Truck extends Car {
    
    constructor( type: string, model: string, hp: number, price: number, seats: number, color: string, public weight: number) {
        super(type, model, hp, price, seats, color)
    }

    getInfo() {
        return `${super.getInfo()}
                Weight: ${this.weight}`
    }
}

let myTruck = new Truck ("Cooler", "MAN", 1200, 100000, 3, "white", 10.0);
console.log(myTruck.getInfo());


