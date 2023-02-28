const textElement = document.querySelector("#evaluatedText");
const h3Element = document.querySelector("#wordCount");

function handleInput(e){
    const sentence = e.target.value;
    const count = sentence.split(" ").length;
    h3Element.textContent = count-1;
}
textElement.addEventListener('input', handleInput);