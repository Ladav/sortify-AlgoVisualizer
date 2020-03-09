export const bubble = () => {
    return `function(arr)<br>
    {<br>
     &nbsp;&nbsp;   const len = arr.length;<br>
     &nbsp;&nbsp;   for(let i = 0; i < len - 1; i++)<br>
     &nbsp;&nbsp;   {<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   for(let j = 0; j < len - (i+1); j++)<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   {<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     if(arr[j] > arr[j+1]){<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       [arr[j], arr[j+1]] = [arr[j+1], arr[j]];<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     }<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   }<br>
     &nbsp;&nbsp;   }<br>
     &nbsp;&nbsp;   return arr;<br>
    }`;
}