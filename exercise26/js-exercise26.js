// blocking function

const blockingdata = () =>{
    alert("blocking data")
    console.log("blocking data after alert")
}

console.log("before - blocking data delay")
blockingdata();
console.log("after - blocking data delayy")

// non-blocking function

let nonBlockingData =(callback) =>{
    setTimeout(()=>{

        callback("delay end")
    },2000);
};

console.log(" immediately answer before non-blockin")
nonBlockingData(function (output){
    console.log(output)
});
console.log("After non-blocking call")