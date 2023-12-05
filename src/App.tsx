import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './categoriesPage/Header';
import GlobalStyles from './GlobalStyles';
import Product from './Product'; 
import ProductDetails from './singleProductPage/ProductDetails'; 

const App: React.FC = () => {
   return (
   <Router>
    <div className="App">
      <GlobalStyles />
      <Header />
        <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="product-details/:title" element={<ProductDetails/>} />
        </Routes>
    </div>
    </Router>
  );
};

export default App;