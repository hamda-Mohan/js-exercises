const input = document.querySelector("#colorpick")
const preview = document.querySelector(".preview")
const history = document.querySelector(".col-history")
const clear = document.querySelector("#rem-color")

input.addEventListener("input", () => {
    preview.style.backgroundColor = input.value
    const colorList = document.createElement("li")
    colorList.textContent = input.value
    colorList.style.color = input.value
    history.appendChild(colorList)


})
clear.addEventListener("click", () => {
    history.innerHTML = "";
})