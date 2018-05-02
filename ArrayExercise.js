let drinks = ["Coke", "Coffee", "Sweet Tea", "Grape Juice", "Beer"];
console.log(`My array has ${drinks.length} elements.`);

drinks[5]="Water";
drinks[8]="Pepsi";
for (i = 0; i < drinks.length; i++){
    console.log(drinks[i]);
}

let animals = [];
for (i = 0; i < 4; i++){
    animals[i] = prompt("Please enter an animal.");
}
// for (i = 0; i < animals.length; i++){
//     console.log(animals[i]);
// }
for (animal in animals){
    console.log(animals[animal]);
}