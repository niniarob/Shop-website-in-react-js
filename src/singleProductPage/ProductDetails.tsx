import React from 'react';
import './styles/ProductDetails.styled';
import{ParentDiv, ProductsImg, ColumnDiv, H1, ProductPrice, DivLine, Description, ButtonDiv, Button, HeartDiv, CategoryTag, Span} from './styles/ProductDetails.styled';
import Rectangle from './assets/Rectangle.svg';
import Heart from './assets/Heart.svg';
import { useLocation } from 'react-router-dom';


interface Product {
    image: string;
    title: string;
    price: number;
    description:string;
    category:string;
  }

const ProductDetails: React.FC = () => {

    const location = useLocation();
    const { product } = location.state as { product: Product };
  
    if (!product) {
      return <div>No product information available.</div>;
    }


    return(
        <ParentDiv>
            <ProductsImg src={product.image} alt={product.title}/>
            <ColumnDiv>
            <H1> {product.title}</H1>
            <ProductPrice>${product.price}</ProductPrice>
            <DivLine></DivLine>
            <Description>
                {product.description}
            </Description>
            <DivLine></DivLine>
            <ButtonDiv>
                <Button>Add to Cart <img src={Rectangle} alt='Rectangle.svg'/> </Button>
                <HeartDiv>
                    <img src={Heart} alt='./Heart.svg'/>
                </HeartDiv>
            </ButtonDiv>
            <DivLine></DivLine>
            <CategoryTag>{product.category}:  <Span>{product.title}</Span></CategoryTag>
            </ColumnDiv>
        </ParentDiv>
    )
};

export default ProductDetails;