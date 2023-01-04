import React from 'react';
import Button from './Button';
import { useState } from 'react';

const ToDoSecond = ({addTask}) => {
    const [inputText, setInputText] = useState('');
    const handleChange = (e) => {
        setInputText(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(inputText)
        setInputText('')
    }

    return (
        <form onSubmit={handleSubmit} className='addForm'>
            <input type="text"
                    onChange={handleChange}
                    value={inputText}
                    placeholder='What need to do...'
                    className='addInput'
             />
            <Button action={''} text={<img className='delete' src="https://cdn-icons-png.flaticon.com/512/7846/7846710.png" alt="delete" />}/>
        </form>
    );
};

export default ToDoSecond;