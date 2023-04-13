import React, { useState, useEffect } from "react";
import './list.css';

function List(props) {
    const {
        tasks,
        setTasks,
        username
    } = props

    const userTasks = tasks[username];
    
    const deleteTask = (value) => {
        delete tasks[username][value]
        props.setTasks({...tasks})
    }

    const checkTask = (value) => {
        tasks[username][value] = !tasks[username][value]
        setTasks({...tasks})
    }

    const [count, setCount] = useState(0);

    useEffect(() => {
        let count = 0;
        Object.keys(userTasks).forEach((task) => {
            if (!userTasks[task]){
                count++;
            }
        })
        setCount(count);
    });

    return (
        <>
        <div>
            {Object.keys(userTasks).map(task => 
            <li className= "list_item" key={task}>
                <div className="list_item_container">
                <button className="button_check" onClick={() => checkTask(task)}>
                {userTasks[task] ? "✅" : "⬜️"} 
                </button>
                <p className={userTasks[task]  ? "list_item_text checked_item" : "list_item_text"} onClick={() => checkTask(task)}>{task}</p>
                <button className="button_bin hide" onClick={() => deleteTask(task)}>
                🗑️ 
                </button> 
                </div>
            </li>)}
        </div>
        <div className="counter">Pending tasks: {count}</div>
        </>
    );

}

export default List;

