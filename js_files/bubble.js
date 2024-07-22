
function bubbleSort() {
    let bars = document.getElementsByClassName("bars");
    let totalDelay = 0;

    for (let i = 0; i < numberArray.length - 1; i++) {
        for (let j = 0; j < numberArray.length - i - 1; j++) {
            (function (i, j, totalDelay) {
                setTimeout(() => {
                    bars[j].style.backgroundColor = "red";
                    bars[j + 1].style.backgroundColor = "red";

                    setTimeout(() => {
                        if (numberArray[j] > numberArray[j + 1]) {
                            let temp = numberArray[j];
                            numberArray[j] = numberArray[j + 1];
                            numberArray[j + 1] = temp;

                            let h1 = bars[j].style.height;
                            let h2 = bars[j + 1].style.height;

                            bars[j].style.height = h2;
                            bars[j + 1].style.height = h1;
                        }

                        bars[j].style.backgroundColor = "rgb(218, 218, 130)";
                        bars[j + 1].style.backgroundColor = "rgb(218, 218, 130)";

                        if (j === numberArray.length - i - 2) {
                            bars[numberArray.length - i - 1].style.backgroundColor = "green";
                        }

                    }, delay);

                }, totalDelay * 2);
            })(i, j, totalDelay);
            totalDelay += delay;
        }
    }

    setTimeout(() => {
        bars[0].style.backgroundColor = "green";
    }, delay * 100 * 100 + 10);
}
