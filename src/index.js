import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./compiled.css"


ReactDOM.render(
  <React.StrictMode>
    <App sectionN={3}/>
  </React.StrictMode>,
  document.getElementById('root')
);

