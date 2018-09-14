import React, { Component } from 'react';

export default class Form extends Component {

    handleChange = event => this.props.handleInputChanges(event.target.value)
    
    render() {
        return (
            <form>
                <input type='text' onChange={this.handleChange} />
            </form>
        )
    }
}