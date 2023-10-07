import NavTopBar from './components/NavTopBar/NavTopBar'
import Title from './components/title/title';
import './App.css'
import React from 'react';

function App() {

  return (
    <><div className='NavBarStyle'>
      <NavTopBar />
    </div>
    <div className='WebTitle'>
    <Title label="Bienvenido a mi tienda Web" />
    </div>
    </>
  );
}

export default App
