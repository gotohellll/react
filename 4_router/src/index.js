import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import App from './1_basic/App'
// import App from './2_link/App'
// import App from './0_review/1_spread'
// import App from './0_review/2_immer'
// import App from './3_fetch/weather'
// import App from './4_axios/weather'
// import App from './5_movie/MovieList'
// import App from './6_movie_link/App'
// import App from './9_exercise/App'
// import App from './9_exercise/App2'
// import App from './9_spring_conn/Conn_test'
// import App from './9_spring_conn/App'
import App from './9_spring_conn/Member'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
