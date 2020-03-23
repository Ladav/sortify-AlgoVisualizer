export const radix = () => {
    return `
    function getDigit(num, place) {<br>
        &emsp;return Math.floor(Math.abs(num) % Math.pow(10, place) / Math.pow(10, place-1));<br>
    };<br>
    <br>
    function digitCount(num) {<br>
        &emsp;if(num === 0) return 1;<br>
        &emsp;return Math.floor(Math.log10(Math.abs(num))) + 1;<br>
    };<br>
    <br>
    function mostDigits(arr) {<br>
        &emsp;let maxDigit = 0;<br>
        &emsp;arr.forEach(el => {<br>
            &emsp;&emsp;let digits = digitCount(el);<br>
            &emsp;&emsp;if(digits > maxDigit) maxDigit = digits;<br>
        &emsp;});<br>
        &emsp;return maxDigit;<br>
    };<br>
     <br>
    function radix_sort(arr)<br>
    {<br>
        &emsp;const maxDigitCount = mostDigits(arr);<br>
        &emsp;for(let i = 1; i <= maxDigitCount; i++) {<br>
        &emsp;&emsp;    const backet = [  ];<br>
        &emsp;&emsp;    const base = 10;<br>
        &emsp;&emsp;    <br>
        &emsp;&emsp;    for(let j = 0; j < base; j++)<br>
        &emsp;&emsp;    {<br>
        &emsp;&emsp;&emsp;        backet.push([  ]);<br>
        &emsp;&emsp;    }<br>
        <br>
        &emsp;&emsp;    for(let j = 0; j < arr.length; j++)<br>
        &emsp;&emsp;    {<br>
        &emsp;&emsp;&emsp;        let digit = getDigit(arr[ j ], i);<br>
        &emsp;&emsp;&emsp;        backet[ digit ].push(arr[ j ]);<br>
        &emsp;&emsp;    }<br>
        &emsp;&emsp;    arr = [  ].concat(...backet);<br>
        &emsp;}<br>
    };`;
}
;