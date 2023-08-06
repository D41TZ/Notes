import React from "react";
import "./NavItem.css"
import { Link } from "react-router-dom";

const component = props => 
    <Link className="NavItem" to={`/${props.link}`}>{props.children}</Link>

export default component
