export const selection = () => {
    return `function(arr)<br> 
    {<br>
    &emsp;    const len = arr.length;<br>
    &emsp;    let minIndex;<br>
    &emsp;    for(let i = 0; i < len-1; i++)<br>
    &emsp;    {<br>
    &emsp;&emsp;        minIndex = i;<br>
    &emsp;&emsp;        for(let j = i + 1; j < len; j++)<br>
    &emsp;&emsp;        {<br>
    &emsp;&emsp;&emsp;            if(arr[ minIndex ] > arr[ j ]) minIndex = j;<br>
    &emsp;&emsp;        }<br>
    &emsp;&emsp;        [ arr[ i ], arr[ minIndex ] ] = [ arr[ minIndex ], arr[ i ] ];<br>
    &emsp;    }<br>
    &emsp;    return arr;<br>
    };`
};