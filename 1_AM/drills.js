const assert = require("assert");

// Feel free to look things up online!

const tokenize = function (str) {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.trim().split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
  return str.split("").reverse().join("")
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  for(let i=0; i<arr.length; i++)
  {
    while(arr.includes(arr[i],i+1))
    {
      if(arr.includes(arr[i],i+1))
      {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  x = 1;
  for(let i=1; i<=num; i++)
  {
    x*=i;
  }
  return x
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  let arrNew = new Array(arr1.length)
  if (arr1.length != arr2.length)
  {
    return -1;
  }
  for(let i=0; i<arrNew.length; i++)
  {
    arrNew[i] = [arr1[i], arr2[i]]
  }
  return arrNew
};
const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
console.log(tokenize("Charlie is here right now :)"))
assert (reverse("3df") === "fd3")
console.log(uniqueOnes([1,1,2,3,5,8,1,2,3,4]));
assert(factorial(4) === 24)
assert(zip([1,2,3,4,5,6], [5,4,3,2,1]) === -1)
console.log(zip([1,2,3,4], [4,3,2,1]))