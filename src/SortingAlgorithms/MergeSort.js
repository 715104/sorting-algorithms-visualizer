const mergeSort = (array, speed, setArray, setSortedIndices, setTransitionIndices) => {
    let arr = [...array];
    let n = arr.length;
    let step = 1;
    let left = 0;
    let right = 0;
    let end = 0;

    const merge = (start, mid, end) => {
        let left = arr.slice(start, mid);
        let right = arr.slice(mid, end);
        let i = 0, j = 0, k = start;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }

        while (i < left.length) {
            arr[k] = left[i];
            i++;
            k++;
        }

        while (j < right.length) {
            arr[k] = right[j];
            j++;
            k++;
        }
    };

    intervalRef = setInterval(() => {
        if (step < n) {
            if (left < n - step) {
                right = left + step;
                end = Math.min(left + step * 2, n);
                merge(left, right, end);
                setArray([...arr]);
                setTransitionIndices([left, right, end]);
                left += step * 2;
            } else {
                step *= 2;
                left = 0;
            }
        } else {
            clearInterval(intervalRef);
            setSortedIndices(Array.from({ length: n }, (_, i) => i));
        }
    }, 200 - speed * 2);
};

export default mergeSort;
