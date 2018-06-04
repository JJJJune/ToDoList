import React, { Component} from 'react'
import './styles.css'

export default class Footer extends Component {
    handleShowAll = () => {
        const {ShowAll} = this.props
        ShowAll()
    }
    handleShowActive = () => {
        const {ShowActive} = this.props
        ShowActive()
    }
    handleShowCompleted = () => {
        const {ShowCompleted} = this.props
        ShowCompleted()
    }
    handleDestroyCompleted = () => {
        const {ClearCompleted} = this.props
        ClearCompleted()
    }
    render() {
        const {leftitems} = this.props
        return(
            <div className="app-footer">
                <span>{leftitems} items left</span>
                <button onClick={this.handleShowAll}>All</button>
                <button onClick={this.handleShowActive}>Active</button>
                <button onClick={this.handleShowCompleted}>Completed</button>
                <button onClick={this.handleDestroyCompleted}>Clear Completed</button>
            </div>
        );
    }
}