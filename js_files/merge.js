let numberArray = [6, 5, 4, 2, 1, 5, 3];

function mergeSortFunction() {
    let bars = document.getElementsByClassName("bars");
    let totalDelay = 0;
    mergeSort(numberArray, 0, numberArray.length - 1);
    console.log(numberArray);

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = numberArray[i] + "px";
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }

    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

    console.log(arr);
}

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

