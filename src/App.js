
import './App.css';
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Inicio from "./components/Inicio";
import Catalog from "./components/Catalog";
import CartWidget from "./components/CartWidget";
import ProductView from "./components/ProductView";
import { CartProvider } from './components/CartContext';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import ItemListContainer from "./components/ItemListContainer";


export default function App() {
  // let greeting = "Welcome";

  return (
    <CartProvider>
    <Router>
    
    <div className='html_container'>
      
      
      <NavBar />
        {/* <ItemListContainer greeting={greeting} /> */}
      <Routes>
      <Route exact path="/" element={<Inicio />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/catalog" element={<Catalog />} />
      <Route exact path="/product/:productId" element={<ProductView />} />
      <Route exact path="/cart" element={<CartWidget/>} />
      
      </Routes>
     
    </div>
    </Router>
    </CartProvider>
  )
}
       