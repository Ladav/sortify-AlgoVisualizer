import React from 'react';

import Option from './Option/Option';
const TEXT_CONTENT = {
    sorted: 'sorted',
    unSorted: 'un-sorted',
    partiallySorted: 'partially-sorted'
};

const options = (props) => {
    const style = {
        padding: '0 50px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };
    
    const options = props.arrayType.options.map(opt => {
        return <Option
            key={opt}
            textContent={TEXT_CONTENT[opt]}
            Value={opt}
            active={props.arrayType.value === opt ? true : false }
            selected={props.arraySelected}
            disabled={props.sorting}/>
    });
    return <div style={style}> {options} </div>
};

export default options;