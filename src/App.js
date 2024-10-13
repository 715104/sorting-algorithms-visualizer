import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import ArrayVisualizer from './ArrayVisualizer';
import bubbleSort from './SortingAlgorithms/BubbleSort';
import insertionSort from './SortingAlgorithms/InsertionSort';
import mergeSort from './SortingAlgorithms/MergeSort';
import quickSort from './SortingAlgorithms/QuickSort';
import heapSort from './SortingAlgorithms/HeapSort';
import selectionSort from './SortingAlgorithms/SelectionSort';
import shellSort from './SortingAlgorithms/ShellSort';
import generateNewArray from './utils/generateNewArray';
import isSorted from './utils/isSorted';
import toggleDarkMode from './utils/toggleDarkMode';

const App = () => {
    const [array, setArray] = useState([]);
    const [size, setSize] = useState(30);
    const [speed, setSpeed] = useState(50);
    const [isSorting, setIsSorting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [algorithm, setAlgorithm] = useState('Bubble Sort');
    const [sortedIndices, setSortedIndices] = useState([]);
    const [transitionIndices, setTransitionIndices] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
    const intervalRef = useRef(null);

    useEffect(() => {
        generateNewArray(size);
    }, [size]);

    useEffect(() => {
        if (isSorting && !isPaused) {
            clearInterval(intervalRef.current);
            startSorting();
        }
    }, [speed]);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    const startSorting = () => {
        if (isSorted(array)) {
            alert("Array is already sorted!");
            return;
        }
        setIsSorting(true);
        setIsPaused(false);
        switch (algorithm) {
            case 'Bubble Sort':
                bubbleSort(array, speed, setArray, setSortedIndices, setTransitionIndices);
                break;
            case 'Insertion Sort':
                insertionSort(array, speed, setArray, setSortedIndices, setTransitionIndices);
                break;
            case 'Merge Sort':
                mergeSort(array, speed, setArray, setSortedIndices, setTransitionIndices);
                break;
            case 'Quick Sort':
                quickSort(array, speed, setArray, setSortedIndices, setTransitionIndices);
                break;
            case 'Heap Sort':
                heapSort(array, speed, setArray, setSortedIndices, setTransitionIndices);
                break;
            case 'Selection Sort':
                selectionSort(array, speed, setArray, setSortedIndices, setTransitionIndices);
                break;
            case 'Shell Sort':
                shellSort(array, speed, setArray, setSortedIndices, setTransitionIndices);
                break;
            default:
                break;
        }
    };

    const pauseSorting = () => {
        setIsPaused(true);
        clearInterval(intervalRef.current);
    };

    const resumeSorting = () => {
        setIsPaused(false);
        startSorting();
    };

    const resetSorting = () => {
        setIsSorting(false);
        setIsPaused(false);
        clearInterval(intervalRef.current);
        generateNewArray(size);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleSpeedChange = (e) => {
        setSpeed(e.target.value);
    };

    const handleAlgorithmChange = (e) => {
        setAlgorithm(e.target.value);
    };

    return (
        <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'} flex flex-col items-center min-h-screen`}>
            <Header />
            <main className="flex-grow flex items-center justify-center p-4">
                <ArrayVisualizer array={array} sortedIndices={sortedIndices} transitionIndices={transitionIndices} />
            </main>
            <Footer
                isSorting={isSorting}
                isPaused={isPaused}
                generateNewArray={generateNewArray}
                startSorting={startSorting}
                pauseSorting={pauseSorting}
                resumeSorting={resumeSorting}
                resetSorting={resetSorting}
                handleSizeChange={handleSizeChange}
                handleSpeedChange={handleSpeedChange}
                handleAlgorithmChange={handleAlgorithmChange}
            />
        </div>
    );
};

export default App;