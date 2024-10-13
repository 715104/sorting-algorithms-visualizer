const bubbleSort = (array, speed, setArray, setSortedIndices, setTransitionIndices) => {
    let arr = [...array];
    let n = arr.length;
    let i = 0;
    let j = 0;

    intervalRef.current = setInterval(() => {
        if (i < n) {
            if (j < n - i - 1) {
                setTransitionIndices([j, j + 1]);
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    setArray([...arr]);
                }
                j++;
            } else {
                setSortedIndices((prev) => [...prev, n - i - 1]);
                j = 0;
                i++;
            }
        } else {
            setSortedIndices((prev) => [...prev, 0]);
            clearInterval(intervalRef.current);
        }
    }, 200 - speed * 2);
};

export default bubbleSort;