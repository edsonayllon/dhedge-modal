import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from 'config/configStore'

configureStore()
  .then(({ initialState }) => {
    ReactDOM.render(
      <React.StrictMode>
        <App initialState={initialState}/>
      </React.StrictMode>,
      document.getElementById('root')
    );    
  })
  .catch(err => {
    console.log(err)
    ReactDOM.render(
      <React.StrictMode>
        <div>
          <h1>Loading</h1>
        </div>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
