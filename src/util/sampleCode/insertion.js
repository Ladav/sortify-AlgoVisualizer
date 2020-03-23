export const insertion =  () => {
    return `function(arr)<br>
    {<br>
    &emsp;    let curEl;<br>
    &emsp;    for (let i = 1; i < arr.length; i++)<br>
    &emsp;    {<br>
    &emsp;&emsp;        curEl = arr[ i ];<br>
    &emsp;&emsp;        for (j = i - 1; j >= 0 && arr[ j ] > curEl; j--)<br>
    &emsp;&emsp;        {<br>
    &emsp;&emsp;&emsp;            arr[ j + 1 ] = arr[ j ];<br>
    &emsp;&emsp;        }<br>
    &emsp;&emsp;        arr[ j + 1 ] = curEl;<br>
    &emsp;    }<br>
    &emsp;    return arr;<br>
    };`
};