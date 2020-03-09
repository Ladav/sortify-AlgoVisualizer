import React from 'react';

const bar = (props) => {
    return <div
        style={{
            width: `${props.bar.width}px`,
            height: `${props.length}px`,
            marginRight: `${props.bar.margin}px`,
            background: `${props.color}`,
            boxShadow: `${props.active ? '0 5px 10px #ff224b' : null}`
        }}>
    </div>;
};

export default bar;