export const selection = () => {
    return `function(arr)<br> 
    {<br>
    &nbsp;&nbsp;    const len = arr.length;<br>
    &nbsp;&nbsp;    let minIndex;<br>
    &nbsp;&nbsp;    for(let i = 0; i < len-1; i++)<br>
    &nbsp;&nbsp;    {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        minIndex = i;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        for(let j = i + 1; j < len; j++)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            if(arr[minIndex] > arr[j]) minIndex = j;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        }<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];<br>
    &nbsp;&nbsp;    }<br>
    &nbsp;&nbsp;    return arr;<br>
    };`
};