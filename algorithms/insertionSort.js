async function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            await animateArrayUpdate(j + 1, arr[j + 1]);
            j--;
        }
        arr[j + 1] = key;
        await animateArrayUpdate(j + 1, arr[j + 1]);
    }
    for (let i = 0; i < n; i++) {
        await markAsSorted(i);
    }
}