function selectionSort() {
    let bars = document.getElementsByClassName("bars");
    let totalDelay = 0;

    for (let i = 0; i < bars.length; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < bars.length; j++) {
            (function (i, j, totalDelay) {
                setTimeout(() => {
                    bars[smallestIndex].style.backgroundColor = "orange";
                    bars[j].style.backgroundColor = "red";
                    setTimeout(() => {
                        if (parseFloat(bars[smallestIndex].style.height) > parseFloat(bars[j].style.height)) {
                            bars[j].style.backgroundColor = "orange";
                            bars[smallestIndex].style.backgroundColor = "";
                            smallestIndex = j;
                        } else {
                            if (smallestIndex != j) {
                                bars[j].style.backgroundColor = "";
                            }
                        }

                        if (j == bars.length - 1) {
                            let tempHeight = bars[i].style.height;
                            bars[i].style.height = bars[smallestIndex].style.height;
                            bars[smallestIndex].style.height = tempHeight;
                            bars[i].style.backgroundColor = "green";
                            if (i != smallestIndex) {
                                bars[smallestIndex].style.backgroundColor = "";
                            }
                        }
                    }, delay);
                }, totalDelay);
            })(i, j, totalDelay);

            totalDelay += delay;
        }
        setTimeout(() => {
            bars[i].style.backgroundColor = "green";
        }, totalDelay + 10);
        totalDelay += delay;
    }
}
