import React, { Component } from 'react'
import './styles.css'

export default class TodoItem extends Component {
    handleClick = () => {
        const {Delete,id} = this.props
        Delete(id)
    }
    handleCompleted = () => {
        const {Completed,id} = this.props
        Completed(id)
    }
    render() {
        const {value, completed} = this.props
        return(
            <div className="app-todoitem">
                <input 
                    type="checkbox"
                    checked={completed}
                    onChange={this.handleCompleted}/>
               <input
                    className={ completed? "task-completed": "task-active"}
                    type="text"
                    value={value}/>
               <button onClick={this.handleClick}>x</button>
            </div>
        );
    }
}