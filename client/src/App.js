import React from 'react';
import { Button } from 'antd';
import './App.css';
import Nav from './components/Nav';

export default function App() {
  return (
    <div className="App" style={{'height':'100%'}}>
      <Nav/>
    </div>
  );
}