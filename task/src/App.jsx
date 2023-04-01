import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import guyImage from './Imgs/guyImage.png';
import girlImage from './Imgs/girlImage.png';
import Offersline from "./Components/Offersline";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Product from "./Components/Product";
import {Routes,Route} from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path='/Home' element={<Home/>} />

      <Route path='/Shop' element={<Shop/>} />
      <Route path='/Product' element={<Product/>} />
      <Route path='/Cart' element={<Cart/>} />
        
      </Routes>
    </Router>

    </div>
  );
}

export default App;