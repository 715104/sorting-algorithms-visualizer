const insertionSort = (array, speed, setArray, setSortedIndices, setTransitionIndices) => {
    let arr = [...array];
    let n = arr.length;
    let i = 1;
    let j = 0;
    let intervalRef = null;

    intervalRef = setInterval(() => {
        if (i < n) {
            let key = arr[i];
            j = i - 1;
            while (j >= 0 && arr[j] > key) {
                setTransitionIndices([j, j + 1]);
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
            setArray([...arr]);
            setSortedIndices((prev) => [...prev, i]);
            i++;
        } else {
            setSortedIndices((prev) => [...prev, 0]);
            clearInterval(intervalRef);
        }
    }, 200 - speed * 2);
};

export default insertionSort;
