import './styles/ProductDetails.styled';
import{ParentDiv, ProductsImg, ColumnDiv, H1, ProductPrice, DivLine, Description, ButtonDiv, Button, HeartDiv, CategoryTag, Span} from './styles/ProductDetails.styled';
import Rectangle from './assets/Rectangle.svg';
import Heart from './assets/Heart.svg';


export const ProductDetails = () => {
    return(
        <ParentDiv>
            <ProductsImg />
            <ColumnDiv>
            <H1> Chinese Cabbage </H1>
            <ProductPrice> $17.28 </ProductPrice>
            <DivLine></DivLine>
            <Description>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, 
            ultrices et ipsum. Nulla varius magna a consequat pulvinar. 
            </Description>
            <DivLine></DivLine>
            <ButtonDiv>
                <Button>Add to Cart <img src={Rectangle} alt='Rectangle.svg'/> </Button>
                <HeartDiv>
                    <img src={Heart} alt='./Heart.svg'/>
                </HeartDiv>
            </ButtonDiv>
            <DivLine></DivLine>
            <CategoryTag>Category: <Span>Vegatables</Span></CategoryTag>
            </ColumnDiv>
        </ParentDiv>
    )
};