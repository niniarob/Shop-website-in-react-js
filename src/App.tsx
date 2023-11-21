import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './categoriesPage/Header';
import GlobalStyles from './GlobalStyles';
import ProductDetails from './singleProductPage/ProductDetails'; 
import Product from './Product';

const App: React.FC = () => {
   return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product-details/:title" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;