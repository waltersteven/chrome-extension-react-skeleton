import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  let result = null;

  useEffect( async () => {
    console.log('useEffect executed');

    try {
      result = window.apiCall();

    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="App">
      <h1>This is the App page of your Chrome extension.</h1>
    </div>
  );
}

export default App;
