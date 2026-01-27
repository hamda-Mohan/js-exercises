async  function getUsers () {
    try{
        console.log('fetching users started')
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            throw new Error(`HTTP error${response.status}`)
        }

        const users = await response.json();

        console.log("users: ",users)
        // const strusers = await JSON.stringify(users)
        // console.log("users as string: ",strusers)


    }catch(err){
        console.log(err)
    }
}

getUsers()