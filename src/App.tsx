import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./component/Layout";
import { BrowserRouter } from "react-router-dom";
import { } from 'firebase/firestore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
