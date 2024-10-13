const quickSort = async (array, speed, setArray, setSortedIndices, setTransitionIndices) => {
    let arr = [...array];
    let n = arr.length;
    let intervalRef = null;

    const quickSortHelper = async (arr, low, high) => {
        if (low < high) {
            let pi = await partition(arr, low, high);
            await quickSortHelper(arr, low, pi - 1);
            await quickSortHelper(arr, pi + 1, high);
        }
    };

    const partition = async (arr, low, high) => {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            setTransitionIndices([i, j]);
            await new Promise((resolve) => setTimeout(resolve, 200 - speed * 2));
            if (arr[j] < pivot) {
                i++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                setArray([...arr]);
            }
        }

        let temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        setArray([...arr]);

        return i + 1;
    };

    await quickSortHelper(arr, 0, n - 1);
    setArray(arr);
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
};

export default quickSort;
