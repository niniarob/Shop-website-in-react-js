import React, { useState, useEffect } from 'react';
import './styles/FilterComp.styled';
import {
  FilterStyles,
  Button,
  FlexDiv,
  H4,
  Img,
  Li,
  Circle as StyledCircle,
  H5,
  Span,
  Line,
} from './styles/FilterComp.styled';
import ArrowUp from './assets/ArrowUp.svg';
import Filter from './assets/Filter.svg';
import FetchData from './FetchData';

interface FilterCompProps {
  onCategoryChange: (category: string | null) => void;
}

export const FilterComp: React.FC<FilterCompProps> = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [productsCount, setProductsCount] = useState<{ [key: string]: number }>({});

  const handleDataFetch = (data: any[]) => {
    const uniqueCategories = [...new Set(data.map((product) => product.category))];
    setCategories(uniqueCategories);

    const countByCategory: { [key: string]: number } = {};
    data.forEach((product) => {
      countByCategory[product.category] = (countByCategory[product.category] || 0) + 1;
    });
    setProductsCount(countByCategory);
  };

  const handleCircleClick = (category: string) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  const handleFilterClick = () => {
    onCategoryChange(selectedCategory);
  };

  return (
    <>
      <FilterStyles>
        <Button onClick={handleFilterClick}>
          Filter <img src={Filter} alt='Filter.svg' />
        </Button>
        <FlexDiv>
          <H4>All Categories</H4>
          <Img src={ArrowUp} alt='ArrowUp.svg' />
        </FlexDiv>

        <FetchData url="https://fakestoreapi.com/products" onDataFetch={handleDataFetch} />

        {categories.map((category, index) => (
          <Li key={index}>
            <StyledCircle
              type='radio'
              checked={category === selectedCategory}
              onChange={() => handleCircleClick(category)}
              name='categoryGroup'
            />
            <H5>
              {category} <Span>({productsCount[category] || 0})</Span>
            </H5>
          </Li>
        ))}
        <Line />
      </FilterStyles>
    </>
  );
};
