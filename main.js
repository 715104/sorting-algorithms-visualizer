let array = [];
const arrayContainer = document.getElementById("array-container");
const arraySizeSlider = document.getElementById("array-size-slider");
const generateArrayButton = document.getElementById("generate-array-btn");
const speedSlider = document.getElementById("speed-slider");
const algorithmSelect = document.getElementById("algorithm-select");
const startSortButton = document.getElementById("start-sort-btn");
const pauseResetBtn = document.getElementById("pause-reset-btn");
const resetButton = document.getElementById("reset-btn");
const themeToggle = document.getElementById("theme-toggle");

let sortingSpeed = 200;
let currentAlgorithm = "bubbleSort";
let isPaused = false;
let stopSorting = false;

speedSlider.addEventListener("input", () => {
    sortingSpeed = Math.max(50, 500 - arraySizeSlider.value * 4); // Adjust speed based on size
});

generateArray();
arraySizeSlider.addEventListener("input", generateArray);
generateArrayButton.addEventListener("click", generateArray);
resetButton.addEventListener("click", resetArray);
speedSlider.addEventListener("input", () => {
    sortingSpeed = 200 - speedSlider.value;
});

async function generateArray() {
    array = [];
    arrayContainer.innerHTML = "";
    const arraySize = arraySizeSlider.value;

    for (let i = 0; i < arraySize; i++) {
        const value = Math.floor(Math.random() * 200) + 10;
        array.push(value);
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 2}px`;
        bar.style.width = `${Math.max(10, 800 / arraySize)}px`; // Better scaling
        arrayContainer.appendChild(bar);
    }
}

algorithmSelect.addEventListener("change", () => {
    currentAlgorithm = algorithmSelect.value;
});

startSortButton.addEventListener("click", () => {
    stopSorting = false;
    if (currentAlgorithm === "bubbleSort") bubbleSort(array);
    if (currentAlgorithm === "mergeSort") mergeSort(array, 0, array.length - 1);
    if (currentAlgorithm === "quickSort") quickSort(array, 0, array.length - 1);
    if (currentAlgorithm === "heapSort") heapSort(array);
    if (currentAlgorithm === "insertionSort") insertionSort(array);
    if (currentAlgorithm === "selectionSort") selectionSort(array);
    if (currentAlgorithm === "shellSort") shellSort(array);
});

pauseResetBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseResetBtn.innerHTML = isPaused ? "<i class='fas fa-play'></i> Resume" : "<i class='fas fa-pause'></i> Pause";
});

function resetArray() {
    stopSorting = true;
    arrayContainer.innerHTML = "";
    generateArray();
}

async function animateArrayUpdate(index, value, highlightColor = "#e74c3c", swap = false) {
    while (isPaused) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    const bar = arrayContainer.children[index];
    bar.style.height = `${value * 2}px`;

    // Detect if dark mode is active to set the correct default color
    const isDarkMode = document.body.classList.contains('dark-mode');
    const barDefaultColor = isDarkMode ? "#16a085" : "#3498db";

    // Set orange color during the transition (comparison or swap)
    bar.style.backgroundColor = "#f39c12"; // Orange color for transition
    await new Promise(resolve => setTimeout(resolve, sortingSpeed)); // Delay for the transition

    // Once the transition is done, revert to default color or highlight color
    bar.style.backgroundColor = swap ? "#f1c40f" : highlightColor;
    await new Promise(resolve => setTimeout(resolve, sortingSpeed)); // Delay to highlight the swap or comparison

    // After the animation is complete, revert to the bar's default color
    bar.style.backgroundColor = barDefaultColor;
}



async function markAsSorted(index) {
    const bar = arrayContainer.children[index];
    bar.classList.add("sorted");
    bar.style.backgroundColor = "#2ecc71"; // Green for sorted elements
}

async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            await animateArrayUpdate(i, arr[i]);
            await animateArrayUpdate(j, arr[j], "#f1c40f", true); // Use yellow for swaps
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    await animateArrayUpdate(i + 1, arr[i + 1], "#f1c40f", true);
    await animateArrayUpdate(high, arr[high]);
    return i + 1;
}

// Other sorting algorithms like bubbleSort, mergeSort, quickSort, etc.


document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelectorAll(".control-btn").forEach(button => button.classList.add("dark-mode"));
        document.getElementById("array-container").classList.add("dark-mode");
        themeToggle.checked = true;
    }
});

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    arrayContainer.classList.toggle("dark-mode");
    document.querySelectorAll("button").forEach(button => button.classList.toggle("dark-mode"));

    // Update bar colors based on theme change
    const isDarkMode = document.body.classList.contains('dark-mode');
    const barColor = isDarkMode ? "#16a085" : "#3498db";
    document.querySelectorAll(".bar").forEach(bar => {
        bar.style.backgroundColor = barColor;
    });

    if (themeToggle.checked) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme");
    }
});

