
async function insertionSort() {
    let bars = document.getElementsByClassName("bars");
    bars[0].style.backgroundColor = "green"

    for (i = 1; i < numberArray.length; i++) {

        if (numberArray[i] < numberArray[i - 1] && i > 0) {
            while (numberArray[i] < numberArray[i - 1] && i > 0) {

                bars[i].style.backgroundColor = "red"
                await new Promise(resolve => setTimeout(resolve, delay));

                let tempNo = numberArray[i]
                numberArray[i] = numberArray[i - 1]
                numberArray[i - 1] = tempNo;
                bars[i].style.height = numberArray[i] * 5 + "px"
                bars[i - 1].style.height = numberArray[i - 1] * 5 + "px"
                bars[i].style.backgroundColor = "green"

                if (i >= 1) {
                    bars[i - 1].style.backgroundColor = "red"
                }
                i--;
            }
        }
        bars[i].style.backgroundColor = "green"


    }
}