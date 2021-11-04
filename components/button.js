import React from 'react';

const Button = ({key, onClick}) => {
    return (
        <div>
            <button key={key} onClick={onClick} >Click me!</button>
        </div>
    );
};

export default Button;