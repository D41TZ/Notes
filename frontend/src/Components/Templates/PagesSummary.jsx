import React from "react";
import axios from "axios";
import "./PagesSummary.css"

import NavItem from "./NavItem"

const baseUrl = "http://localhost:3002/notes"

export default class PagesSummary extends React.Component {

    state = {
        list: []
    }

    componentDidMount(){
        axios.get(baseUrl).then(resp => this.setState({ list: resp.data }))
    }
    
    componentDidUpdate(){
        if(this.props.willUpdate === true){
            axios.get(baseUrl).then(resp => {
                this.setState({ list: resp.data })
                this.props.function()
        })
        }
    }

    renderRows(){
        return(this.state.list.map(note => <NavItem key={note.id} link={note.id}>{note.title}</NavItem>))
    }

    render(){
        return (
            <nav className="menu">
                {this.renderRows()}
            </nav>
        )
    }
}
