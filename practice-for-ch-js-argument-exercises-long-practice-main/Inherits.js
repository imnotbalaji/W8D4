Function.prototype.inherits = function (parentClass) {

    function Surrogate() {}; // Step 1 : Define an empty surrogate class 
    Surrogate.prototype = parentClass.prototype; // Step 2: Point the surrogate prototype towards the parentClass prototype
    this.prototype = new Surrogate(); // Step 3: 
    this.prototype.constructor = this;


}


// The four steps to set up an inheritance chain
// function Surrogate(){}; // (1) Define a surrogate class 
// Surrogate.prototype = SuperClass.prototype;  // (2) Set the surrogate prototype = the Superclass prototype 
//SubClass.prototype = new Surrogate(); (3) Set the prototype of the child class to a new instance of the surrogate type
// subClass.prototype.constructor = Subclass; .. and (4) point the constructor label towards subclass;

// Testung fuyn
function MovingObject () {

} // Parent class; 

MovingObject.prototype.move = function() {
    console.log("I can move")
}
function Ship () {} // Child class; 



Ship.inherits(MovingObject);

Ship.prototype.fly = function() {
    console.log("I can fly")
}

// function Asteroid () {} // Another child class 
// Asteroid.inherits(MovingObject);

Ship.prototype.move();
Ship.prototype.fly();

MovingObject.prototype.move();
MovingObject.prototype.fly();