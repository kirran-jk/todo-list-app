import React, { useState } from "react";
import AddToList from './addToList';
import List from './list';

function Content(props) {
    

    const [task, setTask] = useState({});

    function handleSubmit(entry) {
        task[props.username][entry] = false;
        setTask({...task})
    }

    if (!task.hasOwnProperty(props.username)) {
        task[props.username] = {};
        setTask(task)
    }

    return (
        <>
            <AddToList handleSubmit={handleSubmit} username={props.username}/>
            <ul id="myList">
                <List tasks={task} setTasks={setTask} username={props.username}/>
            </ul>
        </>
    )
}

export default Content;