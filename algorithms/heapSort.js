async function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        await animateArrayUpdate(0, arr[0]);
        await animateArrayUpdate(i, arr[i]);
        await heapify(arr, i, 0);
        await markAsSorted(i);
    }
    await markAsSorted(0); // Mark the root element
}

async function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        await animateArrayUpdate(i, arr[i]);
        await animateArrayUpdate(largest, arr[largest]);
        await heapify(arr, n, largest);
    }
}


