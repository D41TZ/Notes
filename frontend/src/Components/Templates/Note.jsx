import React, { Component } from "react";
import { useParams } from "react-router"
import axios from "axios";
import "./Note.css"

const baseUrl = "http://localhost:3002/notes"

function withParams(Component){
    return props => <Component {...props} params={useParams()} />
}

class Note extends Component{

    state = {
        note: {}
    }

    setNote(){
        axios(`${baseUrl}/${this.props.params.id}`).then(resp => this.setState({ note: resp.data }))
    }

    componentDidMount(){
        this.setNote()
    }

    componentDidUpdate(){
        if(this.props.params.id !== String(this.state.note.id)){
            this.updateNote()
            this.setNote()
        }
    }

    updateNote(){
        const id = this.props.params.id
        // axios.put(`${baseUrl}/${id}`, this.state.note)
    }

    updateState(event){
        const note = { ...this.state.note }
        note[event.target.name] = event.target.value
        this.setState({ note })
        console.log(this.state.note)
    }

    render(){
        return(
            <div className="note">
                <input name="title" type="text" value={this.state.note.title} onChange={e => this.updateState(e)} />
                <textarea  name="text" cols="30" rows="10" value={this.state.note.text} onChange={e => this.updateState(e)} ></textarea>
            </div>
        )
    }
}

export default withParams(Note)