
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Posts from './Pages/Posts';
import Navbar from './Navbar';

import '../src/index.css'

import Home from './Pages/Home';
import Footer from './Pages/Footer';
import ProductCategory from './Pages/productCategory';





function App() {
  return (
    <div className="App">


      <Navbar />
      
{/* page style in app.css */}

        
        <div>

          <Routes>

            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/post' element={<Posts />}></Route>
            <Route path='/filter' element={<ProductCategory />}></Route>

          </Routes>
        </div>
      
      <Footer />

    </div>
  );
}

export default App;
