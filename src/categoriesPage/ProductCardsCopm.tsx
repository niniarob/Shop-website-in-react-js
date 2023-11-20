import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ProductCardsComp.styled';
import {
  ProductCard,
  FlexDiv,
  Tittle,
  PriceProduct,
  TitlePrice,
  DivImg,
  ImgBag,
  BagBackground,
  FlexWrap,
  Iimg,
} from './styles/ProductCardsComp.styled';
import Star from './assets/Star 1.svg';
import StarEmpty from './assets/Star 5.svg';
import Bag from './assets/Bag.svg';

interface Product {
  id:number;
  image: string;
  title: string;
  price: number;
  description:string;
  category:string;
}

interface ProductCardsProps {
  products: Product[];
}

export const ProductCards: React.FC<ProductCardsProps> = ({ products }) => {
  const navigate = useNavigate();

  const handleBagClick = (product: Product) => {
    navigate(`/product-details/${product.title}`, { state: { product } });
  };

  return (
    <>
      <FlexWrap>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <Iimg src={product.image} alt={product.title} />
            <Tittle>{product.title}</Tittle>
            <FlexDiv>
              <TitlePrice>
                <PriceProduct>${product.price}</PriceProduct>
                <DivImg>
                  <img src={Star} alt='Star 1' />
                  <img src={Star} alt='Star 2' />
                  <img src={Star} alt='Star 3' />
                  <img src={Star} alt='Star 4' />
                  <img src={StarEmpty} alt='Star 5' />
                </DivImg>
              </TitlePrice>
              <BagBackground onClick={() => handleBagClick(product)}>
                <ImgBag src={Bag} alt='Bag.svg' />
              </BagBackground>
            </FlexDiv>
          </ProductCard>
        ))}
      </FlexWrap>
    </>
  );
};
