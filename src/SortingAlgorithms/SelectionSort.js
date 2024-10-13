const selectionSort = (array, speed, setArray, setSortedIndices, setTransitionIndices) => {
    let arr = [...array];
    let n = arr.length;
    let i = 0;
    let minIdx = 0;

    intervalRef.current = setInterval(() => {
        if (i < n - 1) {
            minIdx = i;
            for (let j = i + 1; j < n; j++) {
                setTransitionIndices([minIdx, j]);
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                let temp = arr[minIdx];
                arr[minIdx] = arr[i];
                arr[i] = temp;
                setArray([...arr]);
            }
            setSortedIndices((prev) => [...prev, i]);
            i++;
        } else {
            setSortedIndices((prev) => [...prev, n - 1]);
            clearInterval(intervalRef.current);
        }
    }, 200 - speed * 2);
};

export default selectionSort;