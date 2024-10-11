async function shellSort(arr) {
    const n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
                await animateArrayUpdate(j, arr[j]);
            }
            arr[j] = temp;
            await animateArrayUpdate(j, arr[j]);
        }
    }
    for (let i = 0; i < n; i++) {
        await markAsSorted(i);
    }
}