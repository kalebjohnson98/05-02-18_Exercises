let answer = prompt("Interested in creating a circle?(yes or no)");
if (answer === "yes"){
    let radius = prompt("Enter a radius for your circle (1-10000).");
    function getArea(radius) {
        return radius;
        }
        let area = getArea(radius * radius * Math.PI);
        console.log(`The radius is ${radius}.`)
        console.log(`The area is ${area}.`);
}
//The Triple Function Way

/*    
function getRadius(){
    let radius = prompt("Enter a radius for your circle.");
    return radius;
}  
function getArea(radius) {
    return Math.PI * radius * radius;
    }
function printArea(area, radius) {
    console.log(`The radius is ${radius}.`);
    console.log(`The area is ${area}.`);
}
let r = getRadius();
let a = getArea(r);

printArea(a, r);
*/
