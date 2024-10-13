import React from 'react';

const ArrayVisualizer = ({ array, sortedIndices, transitionIndices, size }) => {
    return (
        <div className="flex items-end space-x-1 max-w-full overflow-x-auto">
            {array.map((value, index) => (
                <div
                    key={index}
                    className={`bar ${sortedIndices.includes(index) ? 'bg-green-500' : transitionIndices.includes(index) ? 'bg-orange-500' : 'bg-blue-500'}`}
                    style={{ height: `${value}px`, width: `${Math.min(20, 600 / size)}px` }}
                ></div>
            ))}
        </div>
    );
};

export default ArrayVisualizer;
