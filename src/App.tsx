import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Navi from './components/Navi';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

function App() {
 
  return (
    <>
    <Navi/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='shop' element={<Shop/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='shop/:id' element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
