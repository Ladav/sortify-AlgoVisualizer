export const quick = () => {
    return `
    function quickSort(arr, low = 0, high = arr.length-1)<br>
    {<br>
    &emsp;    if(low < high) {<br>
    &emsp;&emsp;        const pivotIndex = partition(arr, low, high);<br>
    &emsp;&emsp;        quickSort(arr, low, pivotIndex - 1);<br>
    &emsp;&emsp;        quickSort(arr, pivotIndex + 1, high);<br>
    &emsp;    }<br>
    &emsp;    return arr;<br>
    };<br>
    <br>
    function partition(arr, low = 0, high = arr.length-1) <br>
    {<br>
    &emsp;    let i = low, j = high;<br>
    &emsp;    const pivot = arr[ low ];<br>
    &emsp;    <br>
    &emsp;    while(i < j) <br>
    &emsp;    {<br>
    &emsp;&emsp;        do<br>
    &emsp;&emsp;        {<br>
    &emsp;&emsp;&emsp;            i++;<br>
    &emsp;&emsp;        } while(arr[ i ] < pivot);<br>
    &emsp;&emsp;        <br>
    &emsp;&emsp;        while (arr[ j ] > pivot)<br>
    &emsp;&emsp;        {<br>
    &emsp;&emsp;&emsp;            j--;<br>
    &emsp;&emsp;        } <br>
    &emsp;&emsp;        if(i < j) [ arr[ i ], arr[ j ] ] = [ arr[ j ], arr[ i ] ];<br>
    &emsp;    }<br>
    &emsp;    [ arr[ low ], arr[ j ] ] = [ arr[ j ], arr[ low ] ];<br>
    &emsp;    return j; <br>
    };`;
};