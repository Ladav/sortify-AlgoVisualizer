const randomArrGenerator = (length) => { // number of bar's
    const newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push((Math.random() * 501) | 0); // 500 is the maximum height possible
    }
    return newArr;
};

const sortedArrGenerator = (length) => { // number of bar's
    const newArr = [];
    for (let i = 1; i <= length; i++) {
        newArr.push((i * (500 / length)) | 0); // 500 is the maximum height possible
    }
    return newArr;
};

const partiallySortedArrGenerator = (length) => { // number of bar's
    const newArr = [];
    let i = 1;
    for (; i <= length/3; i++) {
        newArr.push((i * (500 / length)) | 0); // 500 is the maximum height possible
    }
    for (let j = 1; i <= length*2/3+1; i++, j++) {
        newArr.push((j * (500 / length)) | 0); // 500 is the maximum height possible
    }
    for (; i < length; i++) {
        newArr.push((Math.random() * 501) | 0); // 500 is the maximum height possible
    }
    return newArr;
};

export default {
    sorted: sortedArrGenerator,
    unSorted: randomArrGenerator,
    partiallySorted: partiallySortedArrGenerator
}