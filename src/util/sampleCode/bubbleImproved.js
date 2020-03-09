export const bubbleImproved = () => {
    return `function(arr)<br>
    {<br>
    &nbsp;&nbsp;    const len = arr.length;<br>
    &nbsp;&nbsp;    let noswap;<br>
    &nbsp;&nbsp;    for(let i = 0; i < len - 1; i++)<br>
    &nbsp;&nbsp;    {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        noswap = true;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        for(let j = 0; j < len - (1+i); j++)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            if(arr[j] > arr[j+1]){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                noswap = false;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            }<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        }<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        if(noswap) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            break;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        }<br>
    &nbsp;&nbsp;    }<br>
    &nbsp;&nbsp;    return arr;<br>
    };`
};