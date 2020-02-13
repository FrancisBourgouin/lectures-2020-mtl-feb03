//Kind of errors

//Syntax errors
// const bob 6
const bob = 6;

//Type error
// bob = 8;

//Type error
// bob.map(item => console.log(item));

//type error
// bob.name.firstName;

// Reference error
try {
  if (chicken) {
    console.log(chicken);
  }
} catch (e) {
  // console.log(e);
}

console.log("Happy happy.");

const user = { firstName: "Bob", lastName: "Sburger" };

try {
  console.log(`User is : ${user.name.firstName}`);
} catch (e) {
  console.log("User object is not the way it's  supposed to be");
}

try {
  setTimeout(() => console.log(`User is : ${user.name.firstName}`), 2000);
} catch (e) {
  console.log("User object is not the way it's  supposed to be");
}
