
import './App.css'
import { Routes, Route } from "react-router";
import Home from './components/pages/Home';
import RootLayout from './components/layout.jsx/RootLayout';
import Shop from './components/pages/Shop';
import ProductInside from './components/pages/ProductInside';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Login from './components/pages/Login';
import SingUp from './components/pages/SingUp';
import MyAccount from './components/pages/MyAccount';

function App() {
 

  return (
 <>
<Routes>
  <Route  element={<RootLayout />}>
    <Route path="/" element={<Home/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/productinside" element={<ProductInside/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contacts" element={<Contacts/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/singup" element={<SingUp/>} />
    <Route path="/myaccount" element={<MyAccount/>} />
  </Route>
</Routes>
 </>
  )
}

export default App
