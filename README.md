# Module 3 - Node day 6

## Getting this workshop to your computer!

1. Fork it from the GitHub repo page. (this will give you a copy of it in your account.)
2. Clone it to your computer using the `https` address.
    - On your computer, navigate to the folder where you have been saving your workshops. To through folders in the terminal, use
        - MAC: `ls` to view enclosed files/folders
        - WIN: `dir` to view enclosed files/folders
        - `cd <FOLDERNAME>` to move into a folder.
        - Use `cd ..` to go up one level (parent folder)
    - `git clone <URL>`
    - `cd` into the repo folder.
    - `code .`
    - Create a new branch to work from: `git checkout -b my-solutions`
    - Get to work!
    - Once you are done, stage the files with `git add .`
    - Commit them to the branch with `git commit -m 'I did it!`
    - Push it to GitHub `git push origin HEAD`
    - In the GitHub UI, open a PR
    - Done!!

---

## Exercise 0

A few vanilla JS Promises (no helper modules). Details are in `exercise-0.js`.

---

## NOTE on the rest of the exercises

The exercises below ask you to `return` the output of the Promises. In order to see the result of the promise, you can temporarily output via a console.log the data WITHIN the promise chain (in its own `.then`).

You are `return`ing the value, because you will need this functionality in a later exercise.

If you console.log the function call, you will not see the result as console.log
doesn't wait for the promise to be resolved to execute.

## Calling APIs
In order to do these exercises, you will need to know more about the [JSON format](https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript).

## Exercise 1 - `getIssPosition`

1. Install the [`request-promise`](https://www.npmjs.com/package/request-promise) module with `yarn`, making sure it's added to `package.json`.
2. Complete the code of this function so that it returns the position of the ISS as a `Promise`.
3. Use the data from `http://api.open-notify.org/iss-now.json` to do your work
4. The ISS API returns the position keys as `latitude` and `longitude`. Return them as `lat` and `lng` instead.
 
## Exercise 2 - `getAddressPosition`

1. Complete the code of this function to return a `Promise` for a lat/lng object
2. Use the [OpenCage Data API](https://opencagedata.com/) to do this
    - Sign up for an account (free) and follow the various guides to get started.
    - learning to use an API is the biggest hurdle... if you get stuck, you can peek at the solution. ;)
    - Look up `dotenv` on NPM. You can install it and require it (note that the syntax for this module is slightly different.)
    - Once that is setup, copy the `.env.example` file and rename it `.env`. Then add your API key to it.
3. Once you have it working, pass it a few addresses to see what the responses look like.
4. Make sure to only return an object with lat/lng and not the whole response

## Exercise 3 - `getCurrentTemperatureAtPosition`

  1. Go to [Dark Sky API](https://darksky.net/dev/) and read the documentation
  2. Signup and get a free API key
  3. Complete the code of the function. The `position` parameter is an object with `lat` and `lng`.
  4. Make sure your function only returns a `Promise` for the current temperature (a number) and nothing else
  
## Exercise 4 - `getCurrentTemperature`

While it's useful to get the current temperature for a specific lat/lng, most often we want to provide the name of a place instead.

You already created a function that can do address ==> position, and one that can do position ==> temperature. For this exercise, re-use these two functions to create one that goes directly from address ==> temperature.

You can copy/paste your code from the previous exercises, **or** require them at the top of this file. _Remember to _export_ them from their file, if you plan on _requiring_ them.

## Exercise 5 - `getDistanceFromIss`

Again here you should re-use two previously created functions, plus the `getDistance` function provided below.

One of the functions does address ==> position and the other simply does nothing ==> position. The `getDistance` function needs the two positions to compute the final value.

```js
// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}
```

## Exercise 6 - Guess The Number

This exercise will be done in a new file, `guess-the-number.js`.

Using the `inquirer` module, write a program that will play the "guess the number game":

  * Create a random number between 1 and 100. Call it the hidden number
  * Start with 5 guesses
  * As long as there are guesses left:
    * Ask the user for a number between 1 and 100 until they give you one
    * If they find the hidden number, they win the game. END
    * Otherwise, tell them whether their guess is lower or higher than the hidden number
    * Loop back
  * The user has lost the game. END

---

## Challenge: Hangman

This exercise will be done in a new file, `hangman.js`.

Using the `inquirer` module and any others, write a program that will play Hangman according to the "Method 1" rules at http://www.wikihow.com/Play-Hangman

You can skip the step that says "draw the hangman". Instead, simply count 8 guesses.

To make it more fun, integrate the following functionality:

- Allow players to re-play after they won or lost (`inquirer` has a yes/no type of question)
- Actually, draw the hangman using ASCII art
