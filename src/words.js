import React from 'react'
import {connect} from 'react-redux'

const Words = props => {
    setTimeout(()=>{
        props.dispatch({
            type:'UPDATE_SENTENCE',
            payload: "kfja ;sdlkjfasldk jfaslkdjf ;aklsdjf lkadsjf l;kadsjf lk;asdjf k;lasdjfkasdjf"
          })
    },3000)
    const words = props.sentence.split(' ')
    return (
        <div>
            <h3>Your sentence includes the following words</h3>
            {words.map((word,id)=><p key={id}>{word}</p>)}
        </div>
    )
}

const mapStateToProps = state => ({
    sentence: state.sentence
})

const connectedWords = connect(mapStateToProps)(Words)

export default connectedWords