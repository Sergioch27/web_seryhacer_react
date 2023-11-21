import NavTopBar from './components/NavTopBar/NavTopBar'
import './App.css'
import CategoryItem from './components/CategoryItem/CategoryItem';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  return (
    <>
    <div className='NavBarStyle'>
    </div>
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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
