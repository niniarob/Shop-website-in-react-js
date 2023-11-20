import React, { useState, useEffect } from 'react';
import './App.css';
import { FilterComp } from './categoriesPage/FilterComp';
import { Header } from './categoriesPage/Header';
import { ProductCards } from './categoriesPage/ProductCardsCopm'; 
import GlobalStyles from './GlobalStyles';
import PriceRangeSelector from './categoriesPage/PriceRangeSelector';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (value: number | number[]) => {
    console.log('Price range changed:', value);
  };

  useEffect(() => {
    if (selectedCategory) {
      const apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setFilteredProducts(data))
        .catch((error) => console.error('Error fetching filtered data:', error));
    }
  }, [selectedCategory]);

  return (
    <div className="App">
      <GlobalStyles />
      <Header selectedCategory={selectedCategory} />
      <div className='flex'>
        <div className='column'>
          <FilterComp onCategoryChange={handleCategoryChange} />
          <br />
          <PriceRangeSelector onChange={handlePriceRangeChange} />
        </div>
        <ProductCards products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
