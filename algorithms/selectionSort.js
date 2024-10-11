async function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        await animateArrayUpdate(i, arr[i]);
        await animateArrayUpdate(minIndex, arr[minIndex]);
        await markAsSorted(i);
    }
}
