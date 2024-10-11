async function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (stopSorting) return;
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                await animateArrayUpdate(j, arr[j]);
                await animateArrayUpdate(j + 1, arr[j + 1]);
            }
        }
        await markAsSorted(n - i - 1);
    }
    await markAsSorted(0); // Mark the smallest element as sorted
}