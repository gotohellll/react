import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';

//css 적용
import 'bootstrap/dist/css/bootstrap.css'
import './css/Todo.css'

// import App from './1_todolist/TodoContext'

//context import 2개 필요 
import {TodoProvider} from './2_todolist_context/TodoContext'
import App from './2_todolist_context/components/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
// App 감싸주기 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
