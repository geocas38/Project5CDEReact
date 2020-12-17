// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import counterReducer from './redux-components/ReduxStuff';
// import reportWebVitals from './reportWebVitals';

// // Entry point of the app

// // Create and initialize the Redux store
// // An app has only one store
// // The reducer (function) is the argument of createStore
// // counterReducer comes from reducer.tsx
// const myStore = createStore(counterReducer);

// ReactDOM.render(
//   <React.StrictMode>
//       <Provider store={myStore}>
//     <App />
//     </Provider>
//   </React.StrictMode>,

//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './redux-components/ReduxStuff';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Entry point of the app

// Create and initialize the Redux store
// An app has only one store
// The reducer (function) is the argument of createStore
// counterReducer comes from reducer.tsx
const myStore = createStore(counterReducer);

// Store is a prop of the Provider component
// Provider is the outermost component of the app to help
// ensure that every component has access
/// to the Redux store and functionality 
// The <Provider /> makes the Redux store available to any nested 
// components that have been wrapped in the connect() function
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
