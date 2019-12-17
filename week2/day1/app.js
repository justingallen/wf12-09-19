// dev tools
// alert("Does it work?")
// console.log("Where is the console?")

// data types
// - number
var numOne = 1
// console.log(numOne)
// - string
var someString = "UC Irvine"
// console.log(someString)
// - boolean
var isTrue = true
// console.log(isTrue)
// - array
var someArr = [1, "test", 3, true, 5]
// console.log(someArr)
// - objects
var someObj = {
  // key: value,
  name: "Chris"
}
// console.log(someObj)
// conditions
if (isTrue) {
  // do something
} else if (!isTrue) {
  // do something else
}
// else {}

// loops

var nextArray = [
  [8, 10, "test"],
  ["something", "else ", 3424]
]
// outer loop
// for (var outerIndex = 0; outerIndex < 5; outerIndex++) {
//   // inner loop
//   console.log("*********")
//   console.log("outerIndex: ", outerIndex)
//   for (var innerIndex = 0; innerIndex < 5; innerIndex++) {
//     console.log("innerIndex: ", innerIndex)
//   }
// }

// functions
// params
function sayMyName(name, hobby, work) {
  // console.log(`Hello my name is ${name}, I like to ${hobby}! I work at ${work}`)
  return `Hello my name is ${name}, I like to ${hobby}! I work at ${work}`
}
var personName = "Shaun"

// var data = getData()
// arguments
var shaunGreeting = sayMyName(personName, "dance", "target")
// console.log(shaunGreeting)

function sayStuff(firstName, lastInital, hobbies, hairColor, age) {
  console.log(
    `Hello I am ${firstName}, my hobbies are ${hobbies}, my hair color is ${hairColor} and my age is ${age}`
  )
}

// persons
var faisalFirstName = "Faisal"
var faisalLastInitial = "R"
var faisalHobbies = ["Basketball", "Mario Kart", "Coding"]
var faisalHairColor = "Black"
var faisalAge = 21

// sayStuff(
//   faisalFirstName,
//   faisalLastInitial,
//   faisalHobbies,
//   faisalHairColor,
//   faisalAge
// )
// person object
var faisal = {
  firstName: "Faisal",
  lastInitial: "R",
  hobbies: ["Basketball", "Mario Kart", "Coding"],
  hairColor: "Black",
  age: 21,
  brushHair: function() {
    console.log("I am brushing my hair")
  }
}

function sayStuff2(person) {
  console.log(
    `Hello I am ${person.firstName}, my hobbies are ${person.hobbies}, my hair color is ${person.hairColor} and my age is ${person.age}`
  )
}

// faisal.brushHair()

// sayStuff2(faisal)
// objects
var person = {
  name: "John",
  address: {
    address1: "123 St",
    address2: "Unit 1",
    city: "Costa Mesa",
    state: "CA",
    zip: 92626
  }
}

// console.log(person.address.state)

var personArr = [
  "chris",
  {
    address: {
      address1: "54321 St",
      address2: "Penthouse",
      city: "Costa Mesa",
      state: "CA",
      zip: 92626
    }
  }
]

// console.log(personArr[1].address.city)
// person vars / object

// console.log(console)

// console.log(typeof personArr)
// console.log(document)
// console.log(Array.isArray(personArr))
// console.log(personArr.length)

// class
// blueprint

class Student {
  constructor(fn, ln) {
    this.fName = fn
    this.lName = ln
  }

  sayName() {
    console.log(`My name is ${this.fName} ${this.lName}`)
  }
}

var david = new Student("David", "G")

console.log(david.sayName())
