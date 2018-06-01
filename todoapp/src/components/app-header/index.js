import React, { Component } from 'react'
import './styles.css'

export default class Header extends Component {

    handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            const  {onEnter} = this.props
            if(e.target.value !== '') {
                onEnter(e.target.value)
                e.target.value = ''
            }
        }
    }
    render() {
        return(
            <div className="app-header">
                <input type="checkbox"></input>
                <input 
                    className="app-header-input"
                    placeholder="Whats needs to do?"
                    type="text"
                    onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}