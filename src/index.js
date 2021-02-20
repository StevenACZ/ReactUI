import React from 'react';
import ReactDOM from 'react-dom';
import ReactUIApp from './ReactUIApp';
import './stylesheets/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <ReactUIApp />
  </React.StrictMode>,
  document.getElementById('root')
);