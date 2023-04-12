import React, { useState } from "react";
import './list.css';

function List(props) {

    var tasks = props.tasks[props.username];
    
    const deleteTask = (value) => {
        tasks = tasks.filter((item) => {return item !== value})
        props.tasks[props.username] = tasks
        props.setTasks({...props.tasks})
    }

    const [isActive, setActive] = useState({});

    const checkTask = (index) => () => {
        setActive(state => ({
            ...state,
            [index]: !state[index]
        }));
    } 


    return (
        <div>
            {tasks.map((task, index) => 
            <li className= "list_item" key={task}>
                <div className="list_item_container">
                <button className="button_check" onClick={checkTask(index)}>
                {isActive[index] ? "✅" : null}
                </button>
                <p className={isActive[index] ? "list_item_text checked_item" : "list_item_text"} onClick={checkTask(index)}>{task}</p>
                <button className="button_bin" onClick={() => deleteTask(task)}>
                🗑️ 
                </button> 
                </div>
            </li>)}
        </div>
    );

}

export default List;

