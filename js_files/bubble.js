
async function bubbleSort() {
    let bars = document.getElementsByClassName("bars");
    for (let i = 0; i < numberArray.length; i++) {
        for (let j = 0; j < numberArray.length - i - 1; j++) {
            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await new Promise(resolve => setTimeout(resolve, delay));

            if (numberArray[j] > numberArray[j + 1]) {
                bubbleSwap(j)
            }
            bars[j].style.background = "";
            bars[j + 1].style.background = "green";
        }
    }
    bars[0].style.background = "green";
}

function bubbleSwap(j) {
    let bars = document.getElementsByClassName("bars");

    let tempN = numberArray[j]
    numberArray[j] = numberArray[j + 1]
    numberArray[j + 1] = tempN

    let temp = bars[j].style.height;
    bars[j].style.height = bars[j + 1].style.height;;
    bars[j + 1].style.height = temp;

}
