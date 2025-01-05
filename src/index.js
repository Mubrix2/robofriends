import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons/css/tachyons.min.css'; 
// import {robots} from './robot'; 
// import Cardlist from './cardlist';
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div> 
      {<App/>}
   </div>
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();