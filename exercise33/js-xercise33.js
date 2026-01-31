 const title = document.querySelector('#title')
const text = document.querySelector('#text')


function changeContent(){
   

    title.textContent ="The text content has been changed"
    text.innerHTML = " <em>This content was added using <strong>innerHTML</strong></em>, "
}
