const getuserdatapr = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve({ id: 1, name: "hamda" });
      } else {
        reject("failed to fetch user data");
      }
    }, 2000);
  });
};

getuserdatapr()
    .then((data) => console.log("user data ",data))
    .catch((error) => console.log('error ', error))

