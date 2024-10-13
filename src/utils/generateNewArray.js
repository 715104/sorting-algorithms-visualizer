const generateNewArray = (size, min = 50, max = 150) => {
  const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  return newArray;
};

export default generateNewArray;
