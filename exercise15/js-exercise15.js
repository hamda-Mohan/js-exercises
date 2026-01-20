let people = [

    {name: "Faarah", age: 25 , city: "New York"},
    {name: "Ahmed", age: 30 , city: "Los Angeles"},
    {name: "Layla", age: 22 , city: "Chicago"},
    {name: "Omar", age: 28 , city: "Houston"},
    {name: "Amina", age: 27 , city: "Phoenix"}
];
// Iterate through the array of objects and print each key-value 
 console.log("Person Details:");
for (let person of people) {
    for ( let key in person){    
        console.log(key + ": " + person[key]);
    }
    console.log("-----");
}    

