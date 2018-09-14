import React from 'react'

export default props => {
    const words = props.sentence.split(' ')
    return (
        <div>
            <h3>Your sentence includes the following words</h3>
            {words.map((word,id)=><p key={id}>{word}</p>)}
        </div>
    )
}