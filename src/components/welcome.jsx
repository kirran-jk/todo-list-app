import React from "react";
import './addToList.css';

export class Welcome extends React.Component {
    render() {
        return(
            <div>
                <h2>Hello {this.props.name}!</h2>
            </div>
        );
    }
}

export const Header = (props) => (<div className="header">What To-Do {props.name}? 📝 </div>)