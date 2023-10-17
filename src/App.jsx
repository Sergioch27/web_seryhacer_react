import NavTopBar from './components/NavTopBar/NavTopBar'
import Title from './components/title/title';
import './App.css'
import React from 'react';
import CategoryItem from './components/CategoryItem/CategoryItem';
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
    <CategoryItem
      category='BOX - ACCIÓN'
    />
        <CategoryItem
      category='BOX - REFLEXIÓN'
    />
    </section>
    <section>
      <ItemListContainer
        product='BOX - ACCIÓN'
      />
    </section>
    </>
  );
}

export default App
