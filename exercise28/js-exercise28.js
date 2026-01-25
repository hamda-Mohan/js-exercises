const getuserdatapr = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ id: 1, name: "hamda" });
      } else {
        reject("failed to fetch user data");
      }
    }, 2000);
  });
};

async function displayuserdata () {
    try{
        const user = await getuserdatapr()
        console.log(user)
    }catch(err){
        console.log(err)
    }
}
displayuserdata() 