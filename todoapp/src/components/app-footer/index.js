import React, { Component} from 'react'
import './styles.css'

export default class Footer extends Component {
    render() {
        const {leftitems} = this.props
        return(
            <div className="app-footer">
                <span>{leftitems} items left</span>
                <label>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </label>
                <button>Clear Completed</button>
            </div>
        );
    }
}