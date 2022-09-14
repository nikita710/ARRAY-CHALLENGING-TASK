let allGood = false;

// Define a Promise
// A Promise can be in one of three states:
// - Pending     | hasn't settled to a value yet
// - Fulfilled   | settled successfully  (calling resolve())
// - Rejected    | settled unsuccessfully (calling reject())

let fetchSomeData = new Promise((resolve, reject) => {
  if (allGood) {
    resolve({
      id: 1,
      message: "It works fine!",
    });
  } else {
    reject("Error fectching data!");
  }
});

// Consuming a Promise

fetchSomeData
  .then((fetchData) => {
    console.log("Fetch : ", fetchData);
  })
  .catch((err) => {
    console.log("Error : ", err);
  });
