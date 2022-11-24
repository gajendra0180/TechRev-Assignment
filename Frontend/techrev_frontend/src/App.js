import logo from './logo.svg';
import Header from './Components/Header';
import Search from './Components/Search';
import UserDetail from './Components/UserDetail';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "Warp", justifyContent: "space-between" }}>
        <Search />
      </div>
    </div >
  );
}

export default App;
