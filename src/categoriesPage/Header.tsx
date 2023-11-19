import React from 'react';
import './styles/Header.styled';
import { HeaderStyles, HeaderChild, Paragraph, ProductName } from './styles/Header.styled';
import Background from './assets/Background.jpg';
import HomeImg from './assets/Home.svg';
import Arrow from './assets/Arrow.svg';

interface HeaderProps {
  selectedCategory: string | null;
}

export const Header: React.FC<HeaderProps> = ({ selectedCategory }) => {
  return (
    <>
      <HeaderStyles style={{ backgroundImage: `url(${Background})` }}>
        <HeaderChild>
          <img src={HomeImg} alt='Home.svg' />
          <img src={Arrow} alt='Arrow.svg' />
          <Paragraph>Categories</Paragraph>
          <img src={Arrow} alt='Arrow.svg' />
          <ProductName>{selectedCategory ? selectedCategory : 'Products'}</ProductName>
        </HeaderChild>
      </HeaderStyles>
    </>
  );
};
