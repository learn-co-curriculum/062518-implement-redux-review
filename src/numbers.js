import React from 'react'

export default props => {
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