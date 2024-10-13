const heapSort = async (array, speed, setArray, setSortedIndices, setTransitionIndices) => {
    let arr = [...array];
    let n = arr.length;

    const heapify = async (arr, n, i) => {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            setArray([...arr]);
            await heapify(arr, n, largest);
        }
    };

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        setArray([...arr]);
        await heapify(arr, i, 0);
    }

    setArray(arr);
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
};

export default heapSort;