export const bubble = () => {
    return `function(arr)<br>
    {<br>
     &emsp;   const len = arr.length;<br>
     &emsp;   for(let i = 0; i < len - 1; i++)<br>
     &emsp;   {<br>
     &emsp;&emsp;&nbsp;   for(let j = 0; j < len - (i+1); j++)<br>
     &emsp;&emsp;&nbsp;   {<br>
     &emsp;&emsp;&emsp;&nbsp;     if(arr[ j ] > arr[ j+1 ]) {<br>
     &emsp;&emsp;&emsp;&emsp;&nbsp;       [ arr[ j ], arr[ j+1 ] ] = [ arr[ j+1 ], arr[ j ] ];<br>
     &emsp;&emsp;&emsp;&nbsp;     }<br>
     &emsp;&emsp;&nbsp;   }<br>
     &emsp;   }<br>
     &emsp;   return arr;<br>
    };`;
}