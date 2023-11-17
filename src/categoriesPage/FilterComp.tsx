
import React, { useState } from 'react';
import './styles/FilterComp.styled';
import { FilterStyles, Button, FlexDiv, H4, Img, Li, Circle as StyledCircle, H5, Span, Line } from './styles/FilterComp.styled';
import ArrowUp from './assets/ArrowUp.svg';
import Filter from './assets/Filter.svg';
import FetchData from './FetchData'; 

export const FilterComp: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleDataFetch = (data: any[]) => {
    const uniqueCategories = [...new Set(data.map((product) => product.category))];
    setCategories(uniqueCategories);
  };

  const handleCircleClick = (index: number) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  return (
    <>
      <FilterStyles>
        <Button>
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
              isClicked={index === clickedIndex}
              onClick={() => handleCircleClick(index)}
            ></StyledCircle>
            <H5>
              {category} <Span>({categories.length})</Span>
            </H5>
          </Li>
          

          // test comment
        ))}
        <Line></Line>
      </FilterStyles>
    </>
  );
};