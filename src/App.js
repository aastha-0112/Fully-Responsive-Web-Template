import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import Team from './components/Team';
import Clients from './components/Clients';
import Social from './components/Social';

function App(){
  return(
    <div>
      <NavBar/>
      <Home/>
      <Services/>
      <Team/>
      <Clients/>
      <Social/>
    </div>
    );
  }

export default App;
