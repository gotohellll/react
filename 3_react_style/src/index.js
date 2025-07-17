import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import App from './a_event/Asynch';
// import App from './b_conditional/1_truthy';
// import App from './b_conditional/2_inline_condition';
// import App from './b_conditional/3_element_variable';
// import App from './b_conditional/4_stop_rendering';
// import App from './c_form/1_button';
// import App from './c_form/2_form';
// import App from './c_form/3_controlled';
// import App from './c_form/4_uncontrolled';
// import App from './c_form/9_exercise';
// import App from './d_props/1_props';
// import App from './d_props/2_containment';
// import App from './d_props/3_containment';
// import App from './e_immer/1_basic';
import App from './e_immer/2_exercise';

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
