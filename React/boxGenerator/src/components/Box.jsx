import React from 'react';

const Box = props => {

    return (
        <div style=
        {{
            backgroundColor: props.color,
            height: `${props.height}px`,
            width: `${props.width}px`,
            margin: '20px',
            display: 'inline-block'
        }}
        ></div>
        );
    }

export default Box;