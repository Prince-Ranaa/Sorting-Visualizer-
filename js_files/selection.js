async function selectionSort() {
    let bars = document.getElementsByClassName("bars");
    for (let i = 0; i < numberArray.length; i++) {
        let smallestNumber = numberArray[i]
        let smallestIndex = i

        bars[i].style.background = "red";
        for (let j = i + 1; j < numberArray.length; j++) {
            bars[j].style.background = "blue";

            await new Promise(resolve => setTimeout(resolve, delay));

            if (numberArray[j] < smallestNumber) {
                if (smallestIndex !== i) {
                    bars[smallestIndex].style.background = "";
                }
                smallestNumber = numberArray[j]
                smallestIndex = j
                bars[smallestIndex].style.background = "green";

            } else {
                bars[j].style.background = "";

            }
        }
        selectionSwap(i, smallestIndex)
        for (let k = i + 1; k < numberArray.length; k++) {
            bars[k].style.background = "";
        }
        bars[i].style.background = "green";
    }
}

function selectionSwap(i, j) {
    let bars = document.getElementsByClassName("bars");

    let tempN = numberArray[j]
    numberArray[j] = numberArray[i]
    numberArray[i] = tempN

    let temp = bars[j].style.height;
    bars[j].style.height = bars[i].style.height;;
    bars[i].style.height = temp;

}
