import React, { useState } from "react";
import { Welcome, Header } from './welcome';
import Content from './content';
import './username.css';

function GetUsername(props) {

    const [name, setName] = useState("");
    const [username, setUsername] = useState(name);

    function handleChange(username) {
        setName(username.target.value);
    };

    function handleClick(input) {
        input.preventDefault();
        setUsername(name)
    };

    return (
        <>
            <form><h6 className="username">Enter your name here: &emsp;
            <input 
            type="text"
            className="username_input"
            placeholder="What's your name?"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            />
            <button type="submit" onClick={handleClick}>Enter</button></h6></form>
            <br />
            <Welcome name={username}/>
            <br />
            <Header name={username}/>
            <Content username={username}/>
        </>
    )

}

export default GetUsername;