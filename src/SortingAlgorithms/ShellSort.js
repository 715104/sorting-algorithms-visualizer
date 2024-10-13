const shellSort = async (array, speed, setArray, setSortedIndices, setTransitionIndices) => {
    let arr = [...array];
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                setTransitionIndices([j, j - gap]);
                await new Promise((resolve) => setTimeout(resolve, 200 - speed * 2));
                arr[j] = arr[j - gap];
                setArray([...arr]);
            }
            arr[j] = temp;
            setArray([...arr]);
        }
    }

    setArray(arr);
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
};

export default shellSort;