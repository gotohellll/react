import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import App from './a_kind/App_Component';
// import CommentList from './b_ex_comment/CommentList'; //export한 이름안쓰고 App으로 써도 가능 
// import App from './b_ex_comment/CommentList';
// import App from './c_state/App2_event';
// import App from './c_state/App3_state_class';
// import App from './c_state/App3_state_func';
// import App from './c_state/App4_연습1';
// import App from './c_state/App1_component';
// import App from './c_state/App0_state_class_reminder';
// import App from './c_state/App0_state_func_reminder';
// import App from './c_state/App5_복습';
// import App from './c_state/App6_state_배열';
// import App from './d_lifecycle/App1_class_lifecycle';
// import App from './d_lifecycle/App2_func_lifecycle';
// import App from './c_state/App7_연습_class';
// import App from './c_state/App7_연습_func';
// import App from './e_hook/App0_useState';
// import App from './e_hook/App1_useEffect';
// import App from './e_hook/App1_useEffect연습';
import App from './e_hook/App2_useMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
