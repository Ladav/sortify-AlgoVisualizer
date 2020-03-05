export const bubble = () => {
    return `function merge(arr1, arr2)<br />
        {<br />
        &nbsp;&nbsp;let results = [];<br />
        &nbsp;&nbsp;let i = 0;<br />
        &nbsp;&nbsp;let j = 0;<br />
        &nbsp;&nbsp;while(i < arr1.length && j < arr2.length)<br />
        &nbsp;&nbsp;{<br />
        &nbsp;&nbsp;    &nbsp;&nbsp;if(arr2[j] > arr1[i]) {<br />
        &nbsp;&nbsp;    &nbsp;&nbsp;    results.push(arr1[i]);<br />
        &nbsp;&nbsp;    &nbsp;&nbsp;    i++;<br />
        &nbsp;&nbsp;    &nbsp;&nbsp;} else {<br />
        &nbsp;&nbsp;    &nbsp;&nbsp;    results.push(arr2[j])<br />
        &nbsp;&nbsp;    &nbsp;&nbsp;    j++;<br />
        &nbsp;&nbsp;    &nbsp;&nbsp;}<br />
        &nbsp;&nbsp;}<br />
        &nbsp;&nbsp;while(i < arr1.length) <br />
        &nbsp;&nbsp;{<br />
        &nbsp;&nbsp;    &nbsp;&nbsp;results.push(arr1[i])<br />
        &nbsp;&nbsp;    &nbsp;&nbsp;i++;<br />
        &nbsp;&nbsp;}<br />
        &nbsp;&nbsp;while(j < arr2.length)<br />
        &nbsp;&nbsp;{<br />
        &nbsp;&nbsp;   &nbsp;&nbsp;results.push(arr2[j])<br />
        &nbsp;&nbsp;   &nbsp;&nbsp;j++;<br />
        &nbsp;&nbsp;}<br />
        &nbsp;&nbsp;return results;<br />
    }`;
};