import React, { Component } from "react";
import "./Menu.css"

import NewNoteBtn from "./NewNoteBtn"
import PagesSummary from "./PagesSummary";

export default class Menu extends Component {

    state = {
        navUpdate: false
    }

    checkChanges(){
        this.setState({ navUpdate: true })
    }

    changeState(){
        this.setState({ navUpdate: false })
    }

    render(){
        return(
            <aside className="menuArea">
                <NewNoteBtn function={this.checkChanges.bind(this)}></NewNoteBtn>
                <PagesSummary willUpdate={this.state.navUpdate} function={this.changeState.bind(this)}></PagesSummary>
            </aside>
        )
    }
}
