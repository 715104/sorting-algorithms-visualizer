import React from 'react';

const Header = () => {
    return (
        <header className="w-full p-4 flex items-center justify-between shadow-lg">
            <h1 className="text-2xl font-bold">
                <i className="fas fa-sort mr-2"></i>
                Sorting Algorithms Visualizer
            </h1>
        </header>
    );
};

export default Header;