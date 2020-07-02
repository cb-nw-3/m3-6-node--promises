//This one is shown the last
const miPrimeraPromise = new Promise((resolve, reject) => {
  // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
  // En la vida real, probablemente uses algo como XHR o una API HTML5.
  setTimeout(function () {
    resolve('¡Éxito!'); // ¡Todo salió bien!
  }, 2000);
});

miPrimeraPromise.then((successMessage) => {
  // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
  // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
  console.log('¡Sí! ' + successMessage);
});

//USING CALLBACKS

function watchTutorialCallback(callback, errorCallback) {
  let userLeft = true;
  let userWatchingCatMeme = true;

  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':(',
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat',
    });
  } else {
    callback('Thumbs up and Subscribe');
  }
}

//USING PROMISES

function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat',
      });
    } else {
      resolve('Thumbs up and Subscribe');
    }
  });
}

watchTutorialCallback(
  (message) => {
    console.log('callback:', message);
  },
  (error) => {
    console.log('callback:', error.name + ' ' + error.message);
  }
);

watchTutorialPromise()
  .then((message) => {
    console.log('Promises:', message);
  })
  .catch((error) => {
    console.log('Promises', error.name + ' ' + error.message);
  });

// USING PROMISES ALL
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log('race', message);
  }
);
