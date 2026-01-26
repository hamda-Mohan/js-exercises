function operate(a,b, callback){
    return callback(a,b)
}

// addittion
const add =(a,b) =>{
    return a+b
}
// subtraction
const sub =(a,b) =>{
    return a-b
}
// multiplication
const mul =(a,b) =>{
    return a*b
}
// devision
const dev =(a,b) =>{
    return a/b
}

console.log("addition: ",operate(32,43,add))
console.log("subrtacion: ",operate(10,5,sub))
console.log("multiplication: ",operate(5,2,mul))
console.log("devision: ",operate(20,10,dev))