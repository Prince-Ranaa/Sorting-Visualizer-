
function generateNewArray() {
    numberArray = [];
    for (let i = 0; i < 100; i++) {
        let number = Math.floor(Math.random() * 100) + 1;
        numberArray.push(number);
    }
    visualizeArray(numberArray);
}

function visualizeArray(array) {
    const container = document.getElementById("barContainer");
    container.innerHTML = '';
    array.forEach(element => {
        const div = document.createElement('div');
        div.className = "bars";
        div.style.height = element * 5 + "px";
        div.style.width = "10px";
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateNewArray();
});
