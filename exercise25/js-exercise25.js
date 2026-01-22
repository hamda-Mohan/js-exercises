//spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); 

//rest operator
const multiply = (...num) => {
    return num.reduce((total , number) => total * number, 1);
}

console.log(multiply(100, 100));

