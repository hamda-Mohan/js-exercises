function changeImage(){
    const image = document.querySelector('#image');
    const url = prompt("enter url image")
    const borderColor = prompt('enter border-color')
    const width = prompt("enter width")
    const height = prompt("enter height")
    const borderRadius = prompt("enter border-radius")
    image.setAttribute('src',url)
    image.style.border = `1px solid ${borderColor}`;
    image.style.width = `${width}px`
    image.style.height = `${height}px`
    image.style.borderRadius = `${borderRadius}px`
    image.style.padding = "5px"
    image.style.backgroundColor = '#5ec0eec5'

}