import React, { Component } from 'react';
import Form from './form'
import Words from './words'
import Numbers from './numbers'
import store from './store'
import {Provider} from 'react-redux'

const tramezzino = store

// class App extends Component {

//   handleInputChanges = sentence => {
//     store.dispatch({
//       type:'UPDATE_SENTENCE',
//       payload: sentence
//     })
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <React.Fragment>
//           <Form handleInputChanges={this.handleInputChanges}/>
//           <Words />
//           <Numbers />
//         </React.Fragment>
//       </Provider>
//     );
//   }
// }

const App = props => {

  const handleInputChanges = sentence => {
    store.dispatch({
      type:'UPDATE_SENTENCE',
      payload: sentence
    })
  }


    return (
      <Provider store={store}>
        <React.Fragment>
          <Form handleInputChanges={handleInputChanges}/>
          <Words />
          <Numbers />
        </React.Fragment>
      </Provider>
    );
}



export default App;
