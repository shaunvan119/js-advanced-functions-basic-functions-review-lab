// Your code here

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity="go to the office") {
   return `This Monday, I will ${activity}.`
}



let wrapAdjective = function (string="*") {
  return function(word="a hard worker") {
      return `You are ${string}${word}${string}!`
  }
}

const Calculator = {
  add: function(num1, num2) {
      return num1 + num2
  },
 
  subtract: function(num1, num2) {
      return num1 - num2
  },
  multiply: function(num1, num2) {
      return num1 * num2
  },
  divide: function(num1, num2) {
      return num1 / num2
  }
}

let actionApplyer = function(int, arr) {
  let a = int

  arr.forEach( ele => {
      a = ele(a)
  })

  return a
}


