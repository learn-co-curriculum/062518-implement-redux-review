import { createStore } from 'redux'
import { combineReducers } from 'redux'

function reduceSentence(state='',action) {
    switch (action.type) {
        case 'UPDATE_SENTENCE':
          return action.payload
        default:
          return state
      }
}

function reduceConfusion(state=[],action) {
    switch (action.type) {
        case 'ADD_STUFF_I_AM_CUNFUSED_ABOUT':
          return [
            ...state.confusedAbout,
            action.payload
        ]
        default:
          return state
      }
}

const rootReducer = combineReducers({
    sentence:reduceSentence,
    confusedAbout:reduceConfusion
})





// function sentenceReducer(state = {
//     sentence:'',
//     stuffThatStillConfusesUs:[
//         'mapStateToProps',
//         'connect',
//         'connect'
//     ]
// }, action) {
//   switch (action.type) {
//     case 'UPDATE_SENTENCE':
//       return {
//           ...state,
//           sentence: action.payload
//       }
//     default:
//       return state
//   }
// }

const store = createStore(rootReducer)
export default store

