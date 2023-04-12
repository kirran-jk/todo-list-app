import React, { useState } from "react";
import { Welcome, Header } from './welcome';
import Content from './content';
import './username.css';

function GetUsername(props) {

    const [name, setName] = useState("");

    function handleChange(username) {
        setName(username.target.value);
    }

    return (
        <>
            <h6 className="username">Enter your name here: &emsp;
            <input 
            type="text"
            className="username_input"
            placeholder="What's your name?"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            /></h6>
            <br />
            <Welcome name={name}/>
            <br />
            <Header name={name}/>
            <Content username={name}/>
        </>
    )

}

export default GetUsername;