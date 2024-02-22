
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import Navi from './components/Navi';
import CartProvider from './components/CartProvider'; 

function App() {
  return (
    <BrowserRouter>
      <CartProvider> 
        <Navi/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
