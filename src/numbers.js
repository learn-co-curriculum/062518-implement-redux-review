import React from 'react'
import {connect} from 'react-redux'

const Numbers = props => {
    let numberOfWords
    if (props.sentence === '') {
        numberOfWords = 0
    } else {
        numberOfWords = props.sentence.split(' ').length
    }
    
    return (
        <div>
            <h3>Your sentence has {numberOfWords} word{numberOfWords >= 1 ? "s" : "" }</h3>
        </div>
    )
}

const mapStateToProps = state => state

const connectedNumbers = connect(mapStateToProps)(Numbers)

export default connectedNumbers