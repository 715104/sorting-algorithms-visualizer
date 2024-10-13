const generateNewArray = (size) => {
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 50);
    return newArray;
};

export default generateNewArray;