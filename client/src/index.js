import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Store } from './context/Store';

const Index = () => {
  return (
    <Store>
      <App/>
    </Store>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

