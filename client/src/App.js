import React from 'react';
import './App.css';
import "bootswatch/dist/slate/bootstrap.css";
import AppNav from './components/layout/AppNav';
import Jumbotron from './components/layout/Jumbotron';
function App() {
  return (
    <div>
      <AppNav/>
         <div className="container">
      
      <Jumbotron/>
    </div>
    </div>
 
  );
}

export default App;
