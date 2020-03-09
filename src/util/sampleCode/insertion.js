export const insertion =  () => {
    return `function(arr)<br>
    {<br>
    &nbsp;&nbsp;    let curEl;<br>
    &nbsp;&nbsp;    for (let i = 1; i < arr.length; i++)<br>
    &nbsp;&nbsp;    {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        curEl = arr[i];<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        for (j = i - 1; j >= 0 && arr[j] > curEl; j--)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            arr[j + 1] = arr[j];<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        }<br>
    &nbsp;&nbsp;&nbsp;&nbsp;        arr[j + 1] = curEl;<br>
    &nbsp;&nbsp;    }<br>
    &nbsp;&nbsp;    return arr;<br>
    };`
};