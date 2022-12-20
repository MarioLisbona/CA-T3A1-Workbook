// creating the class Car
// use brand as the argument to the constructor function
// assign this.carname to the value of brand when a car object is instantiated
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    // create a method that will return a message with the brand of the car
    present() {
      return 'I have a ' + this.carname;
    }
}
  
//Create a class Model that extends or inherits from th class car
// the constructor takes two arguments, brand and mod
// brand will be inherited from the parent class with the super function
// assign this.model to the value of the mod argument
class Model extends Car {
    constructor(brand, mod) {
    super(brand);
    this.model = mod;
    }
    // method to return a message.
    // uses this.present method inherited from the parent class
    // and this.model's value passed to the constructor when a Model object is instantiated
    show() {
        return this.present() + ', it was made in ' + this.model;
    }
}
  
// An assigning an array of strings to the variable makes
let makes = ["Ford", "Holden", "Toyota"]

// using the Array.from method to return an array and assign it to the variable models
// Array.from is taking in the argument new Array(40) which creates an array of 40 elements
// all of which are empty
// an arrow function is called on the empty array, passing in the element(x) and the index(i) as arguments
// for each element in the array, the index is added to 1980, x is not used
// the returned array[1980, 1981, 1982......2019] will be assigned to models
let models = Array.from(new Array(40), (x,i) => i + 1980)

// function to return a random integer between min and max, inclusive of min and max
function randomIntFromInterval(min,max) { // min and max included
    // using Math.floor and Math.random to produce a random integer between min and max inclusive

    // Math.random will return a value in the range of 0 - 1 where 0 is inclusive and 1 is exclusive
    // so the value will basically be between 0 - 0.999999...
    // using the return value of Math.random and passing it as an argument to Math.floor will result
    // in a whole integer being returned, basically it will truncate all the decimal places.
    // Math.floor(Math.random()) will always return 0 because the max range of math.random is 0.999999...
    // We need to make the range larger. Multiplying Math.random() by an integer will increase the range by a factor of the multiplier
    // e.g Math.random() * 4 will quadruple the range, so it will return a value between 0 and 3.999999...
    // if we use the above return value passed into Math.floor we get a value between 0 and 3 (the .9999 is truncated)
    // so we've managed to get 4 whole integers because we multiplied Math.random() by 4
    // Now we can use this calculation to generate a number between the range we want.
    // when given a min and a max value, to find the range, inclusive of the min and max value, we use (max - min) + 1
    // e.g

    // let max = 12
    // let min = 8
    // Math.floor(Math.random()*(max-min+1))
    // This will result in a range of 0, 1, 2, 3, 4
    // This range is the correct length, but has the wrong staring point because the range of Math.random() will always start at 0
    // To adjust for this we can add the min value to the end of the formula then it will bring the starting point of the range
    // to the correct position (the value of min is 8. 8 + 0 is the new starting point for the range)
    // let max = 12
    // let min = 8
    // Math.floor(Math.random()*(max-min+1) + min)

    return Math.floor(Math.random()*(max-min+1)+min);
}

// iterate through the models array using the of keyword to access the value of each element
// this will iterate through each element 1980 through to 2019
for (model of models) {
    // call randomIntFromInterval()
    // 0 is argument for min, (makes.length-1 is the last element) passed as the max value
    // will return a random index between 0 and 2, and the value of that index in makes[]
    // will be pased to the make variable
    make = makes[randomIntFromInterval(0,makes.length-1)]

    // the same thing is meant to happen here but with the models array
    // however model will only ever be returned a random year between 1980, 1981 and 1982
    // because the max value is set as makes.length-1 (2) instead of model.length -1 (39)
    // will comment out incorrect line and refactor below
    // model = models[randomIntFromInterval(0,makes.length-1)]

    model = models[randomIntFromInterval(0,models.length-1)]

    // A new instance of the Model class is created and passed in two arguments
    // the random make of a car - either "Ford", "Holden", "Toyota"
    // and a random model number between 1980 and 2019
    mycar = new Model(make, model);

    // call the show() method attached to the mycar instance
    //console.log() the return value of the show() method
    // This will print 40 cars with a random make and model
    console.log(mycar.show())
}