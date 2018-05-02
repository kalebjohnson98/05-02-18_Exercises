let car = {
    color: "Midnight-blue",
    make: "Mazda",
    year: 2016
}

console.log(`My car is ${car.color}. My make of my car is a ${car.make} ${car.year}.`);

delete car.color;
car.color = "Emerald Green";

console.log(`My car is ${car.color}. My make of my car is a ${car.make} ${car.year}.`);

class Student {
    constructor(name, age, species){
        this.name = name;
        this.age = age;
    }
    submitLab(){
        console.log(`I, ${this.name}, turned in my lab.`);
    }
}

class FrontEndStudent extends Student {
    constructor(name, age, species){
        super(name, age);
        this.species = species;
    }
}

let grant = new Student("Grant", 5);
console.log(grant);

let kaleb = new Student("Kaleb", 19);
console.log(kaleb);

kaleb.submitLab();

let tyler = new FrontEndStudent("Tyler", 26, "Human");
console.log(tyler);