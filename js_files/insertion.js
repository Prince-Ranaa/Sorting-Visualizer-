
function insertionSort() {
    console.log(numberArray);
    let bars = document.getElementsByClassName("bars");
    let totalDelay = 0;
    bars[0].style.backgroundColor = "green";

    for (let i = 1; i < numberArray.length; i++) {
        let j = i;
        let key = numberArray[j]
        let keyBarHeight = bars[j].style.height


        while (j > 0) {
            console.log(j);

            (function (i, j, totalDelay) {
                setTimeout(() => {
                    console.log(j)


                    if (numberArray[j - 1] > key) {
                        bars[j].style.backgroundColor = "red"
                    }

                    setTimeout(() => {
                        if (numberArray[j - 1] > key) {
                            numberArray[j] = numberArray[j - 1];
                            numberArray[j - 1] = key;

                            bars[j].style.height = bars[j - 1].style.height;
                            bars[j - 1].style.height = keyBarHeight;
                        }
                        bars[j].style.backgroundColor = "green"

                    }, delay);
                    console.log(numberArray);


                }, totalDelay);
            })(i, j, totalDelay);
            totalDelay += delay;
            j--;
            continue;
        }
    }
}