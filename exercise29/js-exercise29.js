async function fetchingData() {
    console.log("start fetchig data");

    const response = await fetch('data.json');
    const data = await response.json();
    const jsntstr = JSON.stringify(data)

    console.log("response data: ",jsntstr )
    
}
fetchingData()