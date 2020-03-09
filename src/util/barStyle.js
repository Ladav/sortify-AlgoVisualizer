const getStyles = (length) => {
    if (length <= 40) return [20, 4];
    if (length <= 50) return [15, 4];
    if (length <= 75) return [10, 3];
    if (length <= 110) return [5, 3];
    if (length <= 150) return [4, 2];
    if (length <= 200) return [3, 1];
    else return [2, 1];
};

export default getStyles;