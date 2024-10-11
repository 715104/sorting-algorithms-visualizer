async function mergeSort(arr, left, right) {
    if (left >= right) return;
    const mid = left + Math.floor((right - left) / 2);
    await mergeSort(arr, left, mid);
    await mergeSort(arr, mid + 1, right);
    await merge(arr, left, mid, right);

    if (left === 0 && right === arr.length - 1) {
        for (let i = 0; i < arr.length; i++) {
            await markAsSorted(i);
        }
    }
}

async function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[left + i];
    for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    let i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            await animateArrayUpdate(k, arr[k]);
            i++;
        } else {
            arr[k] = R[j];
            await animateArrayUpdate(k, arr[k]);
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        await animateArrayUpdate(k, arr[k]);
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        await animateArrayUpdate(k, arr[k]);
        j++;
        k++;
    }
}