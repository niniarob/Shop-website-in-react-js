import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Header.styled';
import { HeaderStyles, HeaderChild, Paragraph, ProductName } from './styles/Header.styled';
import Background from './assets/Background.jpg';
import HomeImg from './assets/Home.svg';
import Arrow from './assets/Arrow.svg';

interface HeaderProps {
  selectedCategory?: string | null;
}

export const Header: React.FC<HeaderProps> = ({ selectedCategory }) => {
  const navigate = useNavigate(); 

  const handleParagraphClick = () => {
    navigate('/');
  };
  return (
    <>
      <HeaderStyles style={{ backgroundImage: `url(${Background})` }}>
        <HeaderChild>
          <img onClick={handleParagraphClick} src={HomeImg} alt='Home.svg' />
          <img src={Arrow} alt='Arrow.svg' />
            <Paragraph >Categories</Paragraph>
          <img src={Arrow} alt='Arrow.svg' />
          <ProductName>{selectedCategory ? selectedCategory : "product"}</ProductName>
        </HeaderChild>
      </HeaderStyles>
    </>
  );
};
