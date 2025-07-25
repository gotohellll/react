import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import App from './1_react_ts/1_basic'
// import App from './1_react_ts/2_App'
// import App from './2_todolist/TodoContext'
import {TodoProvider} from './3_todolist_context/TodoContext'
import App from './3_todolist_context/components/App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App /> 
    </TodoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
