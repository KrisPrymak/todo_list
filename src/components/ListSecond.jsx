import React from 'react';
import { useState } from 'react';
import Button from './Button';
import ItemSecond from './ItemSecond';
import ToDoSecond from './ToDoSecond';

const ListSecond = () => {

    const [task, setTask] = useState([
        {id: 1, text: 'do anything', done: true},
        {id: 2, text: 'buy a pencil', done: true},
        {id: 3, text: 'cook dinner', done: false},
        {id: 4, text: 'walk in the park', done: true},
        {id: 5, text: 'watch new movie', done: false},
    ])

    const addTask = (text) => {
        if(text) {
            const newTask = {
                id: Math.random.toString(36).substring(2, 9),
                text,
                done: false
            }
            setTask([...task, newTask])
        }
    }

    const removeTask = (id) => {
        setTask([...task.filter(t => t.id !== id)])
    }

    const isDoneTask = (id) => {
        setTask([...task.map(t => t.id === id ? { ...t, done: !t.done} : t)])
    }

    const removeAllDoneTasks = () => {
        setTask([...task.filter(t => t.done !== true)])
    }

    const doneAllTasks = () => {
        setTask([...task.map(t => t.done === false ? {...t, done: true} : t)])
    }

    return (
        <div className='main'>
            <h1 className='header'>List of tasks: {task.length}</h1>
            <ToDoSecond addTask={addTask}/>
            {task.map(t => {
                return (
                    <ItemSecond task={t}
                    key={task.id}
                    isDoneTask={isDoneTask}
                    removeTask={removeTask}
                    />
                )
            })}
            <span className={task.length === 0 ? 'hidden' : 'btn'}>
            <Button action={removeAllDoneTasks} text='Remove all done'/>
            </span>
            <span className={task.length === 0 ? 'hidden' : 'btn'}>
            <Button action={doneAllTasks} text='To do all'/>
            </span>
        </div>
    );
};

export default ListSecond;