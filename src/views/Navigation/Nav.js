import React from "react";
import './Nav.scss'
import {
	Link, NavLink
} from "react-router-dom"


class Nav extends React.Component {
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/todo" activeClassName="active">Todolist</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/user" activeClassName="active">Users</NavLink>
            </div>
        )
    }
}

export default Nav