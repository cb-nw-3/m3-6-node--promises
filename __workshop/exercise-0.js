// Example
// ------------
// Write a function testNum that takes a number as an argument and returns
// a Promise that tests if the value is less than or greater than the value 10.

const compareToTen = (num) => {
  myPromise = new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + " is greater than 10, success!");
    } else {
      reject(num + " is less than 10, error!");
    }
  });
  return myPromise;
};

// we are creating a function that returns a promise so you can calls the function and handle what the promise results to
compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//then and catch take callbacks that will be called when the promise is resolved.

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Exercise 0.1
// ------------
// Write two functions that use Promises that you can chain!
// The first function, makeAllCaps(), will take in an array of words and capitalize them,
// and then the second function, sortWords(), will sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.

// const arrayOfWords = ["cucumber", "tomatos", "avocado"];
// const complicatedArray = ["cucumber", 44, true];

// const makeAllCaps = (array) => {
//     return new Promise((resolve, reject) => {
//         if (array.every(word => typeof word === 'string')) {
//             resolve(array.map(word.toUppercase()));
//         } else {}
//     }

// }

// }

// const sortWords = (array) => {};

// // Calling (testing)
// makeAllCaps(arrayOfWords)
//   .then(sortWords)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// makeAllCaps(complicatedArray)
//   .then(sortWords)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
