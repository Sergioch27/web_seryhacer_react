import NavTopBar from './components/NavTopBar/NavTopBar'
import './App.css'
import { CartProvider } from './context/CartContext'
import CategoryItem from './components/CategoryItem/CategoryItem';
import { NotificationProvider } from './notification/NotificationContext'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import Cart from './components/cart/cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <>
    <NotificationProvider>
    <CartProvider>
    <BrowserRouter>
    <NavTopBar />
    <CategoryItem/>
      <Routes>
        <Route path='/' element={
                <section >
                  <ItemListContainer />
                </section>
                }
        />
        <Route path='/box/:ItemId' element={<ItemDetailContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </NotificationProvider>

    </>
  );
}

export default App
