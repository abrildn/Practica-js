function modificarTitulo() {
    console.log("Activando funcionalidad");
    let textoInput = document.querySelector("#title-input").value;
    let h1Title = document.querySelector("#main-title");
    let bodyElement = document.querySelector("body");
    let container = document.querySelector(".container");
    console.log(textoInput);
    h1Title.textContent = textoInput;
    h1Title.style.color = generateRandomColor();

    bodyElement.style.backgroundColor = generateRandomColor();

    h1Title.style.fontFamily = "monospace";

    container.style.backgroundColor = generateRandomColor();
}

/* h1Title.style.color = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})` */

function generateRandomColor() {
    let intensityR = randomIntensity();
    let intensityG = randomIntensity();
    let intensityB = randomIntensity();
    return `rgb(${intensityR},${intensityG},${intensityB})`;
}

const MAX_RANGE = 256;
function randomIntensity() {
    return Math.random() * MAX_RANGE;
}


