import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ButtonSection from './components/ButtonSection';
import CounterForm from './components/CounterForm';
import Forms from './components/Forms';
import Header from './components/Header';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
import Todo from './components/Todo';

import Gallery from './components/Gallery';
import TitleContext from './context/titleContext';
import CartContext from './context/cartContext';
import { useState } from 'react';
import DropDown from './components/btsrdropdown/DropDown';
import Mandrop from './components/btsrdropdown/Mandrop';
import AllMenu from './components/btsrdropdown/AllMenu';

function App() {
 
  const [cartList, setCartList] = useState([]);
  return (
    <CartContext.Provider 
      value={{
      cart: cartList,
      setCart: setCartList
    }}>
    <TitleContext.Provider value={"Gallery"}>
      <div className="App">
     
        <Header />

        <AllMenu />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/button-section" element={<ButtonSection />} />
          <Route path="/counter" element={<CounterForm />} />
          <Route path="/form" element={<Forms />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </div>
    </TitleContext.Provider>
    </CartContext.Provider>
  );
}



export default App;
