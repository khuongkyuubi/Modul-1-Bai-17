let apple1 = new Apple();
let adam = new Human("Adam", "male", 700);
console.log("Before eat apple")
console.log(apple1.getWeight());
console.log(adam.getWeight());
console.log("After eat apple")
adam.eatApple(apple1);
console.log(apple1.getWeight());
console.log(adam.getWeight());
