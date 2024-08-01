
async function mergeSortFunction() {
    await mergeSort(numberArray, 0, numberArray.length - 1);
}

async function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }

    let mid = Math.floor((low + high) / 2);

    await mergeSort(arr, low, mid);
    await mergeSort(arr, mid + 1, high);
    await merge(arr, low, mid, high);
}

async function merge(arr, low, mid, high) {
    let bars = document.getElementsByClassName("bars");

    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        await new Promise(resolve => setTimeout(resolve, delay));

        bars[left].style.backgroundColor = "red";
        bars[right].style.backgroundColor = "red";

        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            bars[left].style.backgroundColor = "";
            left++;
        } else {
            temp.push(arr[right]);
            bars[right].style.backgroundColor = "";
            right++;
        }
    }

    while (left <= mid) {
        bars[left].style.backgroundColor = "red";
        await new Promise(resolve => setTimeout(resolve, delay));
        temp.push(arr[left]);
        bars[left].style.backgroundColor = "";
        left++;
    }

    while (right <= high) {
        bars[right].style.backgroundColor = "red";
        await new Promise(resolve => setTimeout(resolve, delay));
        temp.push(arr[right]);
        bars[right].style.backgroundColor = "";
        right++;
    }

    for (let i = low; i <= high; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        arr[i] = temp[i - low];
        bars[i].style.height = arr[i] * 5 + "px";
        bars[i].style.backgroundColor = "green";

    }

}
