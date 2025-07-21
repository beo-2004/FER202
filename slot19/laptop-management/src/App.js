// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './components/Home';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import Login from './components/Login';
import NotFound from './components/NotFound';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import ProductEdit from './components/ProductEdit';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavbarComponent />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Login />} />            {/* Default to login */}
              <Route path="/home" element={<Home />} />         {/* Main page after login */}
              <Route path="/laptops" element={<LaptopList />} />
              <Route path="/laptops/:id" element={<LaptopDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/add-product" element={<ProductForm />} />
              <Route path="/edit-product/:id" element={<ProductEdit />} />
              <Route path="/ProductEdit/:id" element={<ProductEdit />} />
              <Route path="/ProductEdit" element={<ProductEdit />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
