// function continuousadd() {
//     let arr = [];
//     return function curried_add(num) {
//         arr.push(num);
//         console.log(arr.reduce( (accum, ele) => accum + ele));
//         return curried_add;
//     }
// }

// const sum = continuousadd()



// function sum() {
//     let sum = 0;
//     for (i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//         // console.log(arguments);
//     }
//     return sum;
// }

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2 , 3, 4, 5) === 15);


function sum(...args) {
    let sum = 0 ; 
    for (let i= 0; i < args.length; i++) {
        sum += args[i];
        console.log(args);
    }
    return sum;

}


