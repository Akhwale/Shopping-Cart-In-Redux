import './App.css';
import AllProducts from './AllProducts';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';


function App() {
  return (
  
  <BrowserRouter>
    <Routes>
      <Route path='/products' element={<AllProducts/>}/>
      <Route path='/products/:_id' element={<ProductDetails/>}/>
      <Route path='/shoppingCart' element={<ShoppingCart/>}/>
      
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;


