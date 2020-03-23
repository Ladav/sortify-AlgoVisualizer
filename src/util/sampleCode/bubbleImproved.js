export const bubbleImproved = () => {
    return `function(arr)<br>
    {<br>
    &emsp;    const len = arr.length;<br>
    &emsp;    let noswap;<br>
    &emsp;    for(let i = 0; i < len - 1; i++)<br>
    &emsp;    {<br>
    &emsp;&emsp;        noswap = true;<br>
    &emsp;&emsp;        for(let j = 0; j < len - (1+i); j++)<br>
    &emsp;&emsp;        {<br>
    &emsp;&emsp;&emsp;            if(arr[ j ] > arr[ j+1 ]){<br>
    &emsp;&emsp;&emsp;&emsp;                [ arr[ j ], arr[ j+1 ] ] = [ arr[ j+1 ], arr[ j ] ];<br>
    &emsp;&emsp;&emsp;&emsp;                noswap = false;<br>
    &emsp;&emsp;&emsp;            }<br>
    &emsp;&emsp;        }<br>
    &emsp;&emsp;        if(noswap) {<br>
    &emsp;&emsp;&emsp;            break;<br>
    &emsp;&emsp;        }<br>
    &emsp;    }<br>
    &emsp;    return arr;<br>
    };`
};