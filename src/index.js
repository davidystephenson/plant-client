import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'

// Render component inside element
ReactDOM.render(
  <BrowserRouter> {/* enables routing */ }
    <Provider store={store}> {/* enables redux, must pass store as prop  */}
      <App /> {/* the app must be wrapped by both elements. the order doesn't matter */}
    </Provider>
  </BrowserRouter>, // component
  document.getElementById('root') // element
);