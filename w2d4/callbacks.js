const QCTAX = 1.14975;

const taxChange = amount => {
  return (QCTAX = amount);
};

try {
  taxChange(1);
} catch (e) {
  console.log(e.message);
}

// We start a timer with settimeout
// we try to change something
// if it worked, we execute the callback with empty error + amount
// if it crashed, we execute the callback with type error + amount

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

//Callback takes two parameters, error and amount

const tellTheWorldAboutTaxChange = (err, amount) => {
  if (err) {
    return console.log(
      `I DID NOT SUCCESFULLY CHANGE THE TAXES TO ${amount}! :( :( :( :(`
    );
  } else {
    return console.log(
      `I SUCCESFULLY CHANGED THE TAXES TO ${amount}! :D :D :D :D :D :D`
    );
  }
};

const basicTaxChange = (err, amount) =>
  console.log(err ? "failure" : "success");

asyncTaxChange(1, tellTheWorldAboutTaxChange);
asyncTaxChange(1, (err, amount) => console.log(err ? "failure" : "success"));
