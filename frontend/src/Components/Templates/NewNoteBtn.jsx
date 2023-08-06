import React from "react";
import axios from "axios";
import "./NewNoteBtn.css";

const baseUrl = "http://localhost:3002/notes"

export default class NewNoteButton extends React.Component {

    createNote(){
        axios.post(baseUrl, {title: "New Note", text: ""}).then(e => this.props.function())
    }

    render(){
        return(
            <button className="newNote" onClick={e => this.createNote()}>
                <i className="fa fa-plus"></i> 
                <p>Criar nota</p>
            </button>
        )
    }
}