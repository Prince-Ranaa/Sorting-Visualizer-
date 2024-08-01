async function quickSortFunction() {
    await quickSort(numberArray, 0, numberArray.length - 1);
    await colorAllBarsGreen();
}

async function quickSort(arr, low, high) {
    if (low < high) {
        let pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
}

async function partition(arr, low, high) {
    let bars = document.getElementsByClassName("bars");

    let pivot = arr[high];
    bars[high].style.backgroundColor = "orange"; // Pivot element
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        bars[j].style.backgroundColor = "red"; // Element being compared
        await new Promise(resolve => setTimeout(resolve, delay));

        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            let temp1 = bars[i].style.height;
            bars[i].style.height = bars[j].style.height;
            bars[j].style.height = temp1;

            bars[i].style.backgroundColor = "yellow";
            bars[j].style.backgroundColor = "yellow";
            await new Promise(resolve => setTimeout(resolve, delay));

            bars[i].style.backgroundColor = "blue";
            bars[j].style.backgroundColor = "blue";
        } else {
            bars[j].style.backgroundColor = "blue";
        }
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    let temp2 = bars[i + 1].style.height;
    bars[i + 1].style.height = bars[high].style.height;
    bars[high].style.height = temp2;

    bars[high].style.backgroundColor = "blue";
    bars[i + 1].style.backgroundColor = "green";

    await new Promise(resolve => setTimeout(resolve, delay));

    return i + 1;
}

async function colorAllBarsGreen() {
    let bars = document.getElementsByClassName("bars");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "green";
        await new Promise(resolve => setTimeout(resolve, delay / 2));
    }
}
