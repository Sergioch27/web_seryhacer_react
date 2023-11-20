import NavTopBar from './components/NavTopBar/NavTopBar'
import Title from './components/title/title';
import './App.css'
import React from 'react';
import CategoryItem from './components/CategoryItem/CategoryItem';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  return (
    <>
    <div className='NavBarStyle'>
      <NavTopBar />
    </div>
    <section className='WebTitle'>
    <Title label="Bienvenido a mi tienda Web" />
    </section>
    <section className='CategoryList'>
    </section>
      <BrowserRouter>
        <CategoryItem/>
      </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
                <section >
                  <ItemListContainer />
                </section>
             }
        />
        <Route path='/box/:ItemId' element={<ItemDetailContainer />}/>
        <Route path='/categoryName/:categoryId' element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
