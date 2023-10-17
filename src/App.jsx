import NavTopBar from './components/NavTopBar/NavTopBar'
import Title from './components/title/title';
import './App.css'
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {

  return (
    <><div className='NavBarStyle'>
      <NavTopBar />
    </div>
    <section className='WebTitle'>
    <Title label="Bienvenido a mi tienda Web" />
    </section>
    <section className='CategoryList'>
    <ItemListContainer 
      product='BOX - ACCIÓN'
    />
        <ItemListContainer 
      product='BOX - REFLEXIÓN'
    />
    </section>
    </>
  );
}

export default App
