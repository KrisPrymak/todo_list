import React from 'react';

const Button = ({action, text}) => {
    return (
        <button className='button' onClick={action}>{text}</button>
    );
};

export default Button;