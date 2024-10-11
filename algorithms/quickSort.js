
async function quickSort(arr, low, high) {
    if (low < high) {
        const pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);

        if (low === 0 && high === arr.length - 1) {
            for (let i = 0; i < arr.length; i++) {
                await markAsSorted(i);
            }
        }
    }
}