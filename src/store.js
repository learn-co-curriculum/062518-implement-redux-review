import { createStore } from 'redux'
import { combineReducers } from 'redux'

const initialState = 

function reduceSentence(state={
    sentence:'',
    confusedAbout:[]
},action) {
    switch (action.type) {
        case 'UPDATE_SENTENCE':
          return {
              ...state,
              sentence: action.payload
          }
        default:
          return state
      }
}

function reduceConfusion(state={
    sentence:'',
    confusedAbout:[]
},action) {
    switch (action.type) {
        case 'ADD_STUFF_I_AM_CUNFUSED_ABOUT':
          return {
              ...state,
              confusedAbout: [
                  ...state.confusedAbout,
                  action.payload
              ]
          }
        default:
          return state
      }
}

const rootReducer = combineReducers({
    reduceSentence,
    reduceConfusion
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

export default createStore(rootReducer)

