// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArrayVisualizer from './ArrayVisualizer';
import bubbleSort from './SortingAlgorithms/BubbleSort';
import insertionSort from './SortingAlgorithms/InsertionSort';
import mergeSort from './SortingAlgorithms/MergeSort';
import quickSort from './SortingAlgorithms/QuickSort';
import heapSort from './SortingAlgorithms/HeapSort';
import shellSort from './SortingAlgorithms/ShellSort';
import selectionSort from './SortingAlgorithms/SelectionSort';
import generateNewArray from './utils/generateNewArray';
import isSorted from './utils/isSorted';
import toggleDarkMode from './utils/toggleDarkMode';

const App = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(30);
  const [speed, setSpeed] = useState(50);
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [transitionIndices, setTransitionIndices] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // Add this line
  const intervalRef = useRef(null);

  useEffect(() => {
    generateNewArray(size).then((newArray) => setArray(newArray));
  }, [size]);

  useEffect(() => {
  if (isSorting && !isPaused) {
    clearInterval(intervalRef.current);
    startSorting();
  }
  return () => {
    clearInterval(intervalRef.current);
  };
}, [isSorting, isPaused, startSorting]);

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
      case 'Shell Sort':
        shellSort(array, speed, setArray, setSortedIndices, setTransitionIndices);
        break;
      case 'Selection Sort':
        selectionSort(array, speed, setArray, setSortedIndices, setTransitionIndices);
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
    generateNewArray(size).then((newArray) => setArray(newArray));
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode(isDarkMode); // Call the toggleDarkMode function
  };

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'} flex flex-col items-center min-h-screen`}>
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <ArrayVisualizer array={array} sortedIndices={sortedIndices} transitionIndices={transitionIndices} size={size} />
      </main>
      <Footer
        isSorting={isSorting}
        isPaused={isPaused}
        generateNewArray={() => generateNewArray(size).then((newArray) => setArray(newArray))}
        startSorting={startSorting}
        pauseSorting={pauseSorting}
        resumeSorting={resumeSorting}
        resetSorting={resetSorting}
        handleSizeChange={(e) => setSize(e.target.value)}
        handleSpeedChange={(e) => setSpeed(e.target.value)}
        handleAlgorithmChange={(e) => setAlgorithm(e.target.value)}
        handleToggleDarkMode={handleToggleDarkMode} // Add this prop
      />
 </div>
  );
};

export default App;
