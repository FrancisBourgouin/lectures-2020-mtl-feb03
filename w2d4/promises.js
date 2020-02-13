let QCTAX = 1.14975;

const asyncTaxChange = (amount, callback) => {
  return setTimeout(() => {
    try {
      QCTAX = amount;
    } catch (e) {
      return callback(e, amount);
    }
    return callback(null, amount);
  }, 1500);
};

const promiseTaxChange = amount => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        QCTAX = amount;
      } catch (e) {
        return reject(e);
      }
      return resolve(amount);
    }, 1500);
  });
};

// console.log(promiseTaxChange(1));

// promiseTaxChange(1)
//   .then(amount => console.log("YAY !"))
//   .catch(err => console.log("NAY"));

const bob = new Promise((resolve, reject) => {
  if (Math.random() > 0.4) {
    resolve();
  } else {
    reject();
  }
});
bob
  .then(() => console.log("YAY !"))
  .catch(() => console.log("NAY"))
  .finally(() => console.log("Hmm."));

// Poke Dictionnary API

// search for word
// {word:"BALALALALA", definition:"..."}

const superPromise = () => {
  return new Promise((resolve, reject) => {
    const number = Math.random();
    if (number > 0.2) {
      resolve(number);
    } else {
      reject("b");
    }
  });
};

const supererPromise = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.4) {
      resolve();
    } else {
      reject();
    }
  });
};

// superPromise().then().catch().finally(() => supererPromise()).then()

// fetchInstagramPictures()
//   .then((data) => fetchWeatherForPictures(data))
//   .then()
//   .catch()
//   .finally()
const arrayOfPromises = [
  superPromise(),
  superPromise(),
  superPromise(),
  superPromise()
];

Promise.all(arrayOfPromises)
  .then(data => console.log(data))
  .catch(data => console.log(data));
