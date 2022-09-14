// Let's create several functions that return Promises
// and look at Promise chaining

// Simulate fetching some data
let fetchData = function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching data complete!");
      resolve({
        id: 1,
        message: "Works fine!",
      });
    }, 2000);
  });
};

// Parse the data
let parseData = function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let parseOutPut = `Parsed the data for id: ${data.id} with message: ${data.message}`;
      resolve({ parsed: parseOutPut });
      console.log("Fetched data :", data);
    }, 2000);
  });
};

// Echo the data
let echoData = function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data);
    }, 2000);
  });
};

// Chaining the Promises!
fetchData()
  .then(parseData)
  .then(echoData)
  .catch((err) => {
    console.error(err);
  });
