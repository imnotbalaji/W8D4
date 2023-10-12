
// Function.prototype.myBind = function() {
//     let that = this;
//     context = arguments[0];
//     // args = arguments.slice(1);
//     // const args = Array.prototype.slice.call(arguments,1); // Not very elegant 
//     const args = Array.from(arguments).slice(1);

//     return function() {
//         return that.apply(context, args)
//     }

// }


// Function.prototype.myBind = function(context) {
//   let that = this;
// //   context = arguments[0];
//   // args = arguments.slice(1);
// //   const args = Array.prototype.slice.call(arguments,1); // Not very elegant 

//   return function() {
//       return that.apply(context, arguments)
//   }

// }

Function.prototype.myBind = function() {
  let that = this;
  context = arguments[0];
  const bindTimeArgs = Array.prototype.slice.call(arguments,1); // Not very elegant 
  return function() {
       let callTimeArgs = Array.from(arguments);
       all_arguments = bindTimeArgs.concat(callTimeArgs);
      return that.apply(context, all_arguments);
  }

}

//... way
Function.prototype.myBind = function (context, ...bindArgs){ //args = bind time args
  let that = this;

  return function (...callArgs) {  //call time arg
    return that.apply(context, [...bindArgs, ...callArgs]);
  };
};


// testing code 
class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  


  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true