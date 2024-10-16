// src/components/Footer.js
import React from 'react';

const Footer = ({
  isSorting,
  isPaused,
  generateNewArray,
  startSorting,
  pauseSorting,
  resumeSorting,
  resetSorting,
  handleSizeChange,
  handleSpeedChange,
  handleAlgorithmChange,
  handleToggleDarkMode,
}) => {
  return (
    <footer className="w-full p-4 flex items-center justify-center shadow-lg">
      <div className="flex items-center space-x-4">
        <button onClick={() => generateNewArray()} className={`bg-blue-600 text-white px-4 py-2 rounded ${isSorting ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSorting}>
          <i className="fas fa-random mr-2"></i>
          New Array
        </button>
        <div className="flex items-center space-x-2">
          <i className="fas fa-sliders-h"></i>
          <input type="range" min="10" max="100" value={30} onChange={handleSizeChange} className="w-24" disabled={isSorting} />
          <span>Size</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Speed:</span>
          <input type="range" min="1" max="100" value={50} onChange={handleSpeedChange} className="w-24" disabled={isSorting && !isPaused} />
        </div>
        <div className="flex items-center space-x-2">
          <span>Algorithm:</span>
          <select value="Bubble Sort" onChange={handleAlgorithmChange} className="bg-white rounded px-2 py-1" disabled={isSorting}>
            <option>Bubble Sort</option>
            <option>Selection Sort</option>
            <option>Insertion Sort</option>
            <option>Merge Sort</option>
            <option>Quick Sort</option>
            <option>Heap Sort</option>
            <option>Shell Sort</option>
          </select>
        </div>
        <button onClick={startSorting} className={`bg-blue-600 text-white px-4 py-2 rounded ${isSorting ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSorting}>
          <i className="fas fa-play mr-2"></i>
          Start
        </button>
        <button onClick={isPaused ? resumeSorting : pauseSorting} className={`bg-blue-600 text-white px-4 py-2 rounded ${!isSorting ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!isSorting}>
          <i className={`fas ${isPaused ? 'fa-play' : 'fa-pause'} mr-2`}></i>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button onClick={resetSorting} className="bg-blue-600 text-white px-4 py-2 rounded">
          <i className="fas fa-redo mr-2"></i>
          Reset
        </button>
        <button onClick={handleToggleDarkMode} className="bg-blue-600 text-white px-4 py-2 rounded">
          <i className="fas fa-moon mr-2"></i>
          Toggle Dark Mode
        </button>
      </div>
    </footer>
  );
};

export default Footer;
