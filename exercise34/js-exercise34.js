const list = document.querySelector(".list");

const addItem = () => {
    const newItem = document.createElement('li')
    newItem.textContent = "new item added"
    list.appendChild(newItem);
}

function removeItem(){
    if(list.lastChild){
        list.removeChild(list.lastChild)
    }else {
        alert("end")
    }
}
