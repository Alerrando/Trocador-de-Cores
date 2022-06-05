const cor = document.querySelector(".cor");
const button = document.querySelector(".btn");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
    hexColor = "#";
    for(let i = 0; i<6; i++)
    {
        hexColor += hex[corAleatoria()];
    }

    cor.textContent = hexColor;
    cor.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function corAleatoria(){
    return Math.floor(Math.random() * hex.length);
}