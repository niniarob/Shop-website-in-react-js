import './styles/ProductCardsComp.styled';
import {ProductCard, FlexDiv, Tittle, PriceProduct, TitlePrice, DivImg, ImgBag, BagBackground, FlexWrap  } from './styles/ProductCardsComp.styled';
import Image from './assets/Image.png';
import Star from './assets/Star 1.svg';
import StarEmpty from './assets/Star 5.svg';
import Bag from './assets/Bag.svg';


export const ProductCards = () => {
    return(
        <>
        <FlexWrap>
        <ProductCard>
            <img src={Image} alt='Image.png' />
        <FlexDiv>
            <TitlePrice>
            <Tittle> Eggplant</Tittle>
            <PriceProduct>$14.99</PriceProduct>
            <DivImg>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={StarEmpty} alt='Star 5'/>
            </DivImg> 
            </TitlePrice>
            <BagBackground>
            <ImgBag src={Bag} alt='Bag.svg'></ImgBag>
            </BagBackground>
        </FlexDiv>
        </ProductCard>
        <ProductCard>
            <img src={Image} alt='Image.png' />
        <FlexDiv>
            <TitlePrice>
            <Tittle> Eggplant</Tittle>
            <PriceProduct>$14.99</PriceProduct>
            <DivImg>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={StarEmpty} alt='Star 5'/>
            </DivImg> 
            </TitlePrice>
            <BagBackground>
            <ImgBag src={Bag} alt='Bag.svg'></ImgBag>
            </BagBackground>
        </FlexDiv>
        </ProductCard>
        <ProductCard>
            <img src={Image} alt='Image.png' />
        <FlexDiv>
            <TitlePrice>
            <Tittle> Eggplant</Tittle>
            <PriceProduct>$14.99</PriceProduct>
            <DivImg>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={StarEmpty} alt='Star 5'/>
            </DivImg> 
            </TitlePrice>
            <BagBackground>
            <ImgBag src={Bag} alt='Bag.svg'></ImgBag>
            </BagBackground>
        </FlexDiv>
        </ProductCard>
        <ProductCard>
            <img src={Image} alt='Image.png' />
        <FlexDiv>
            <TitlePrice>
            <Tittle> Eggplant</Tittle>
            <PriceProduct>$14.99</PriceProduct>
            <DivImg>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={Star} alt='Star 1'/>
                <img src={StarEmpty} alt='Star 5'/>
            </DivImg> 
            </TitlePrice>
            <BagBackground>
            <ImgBag src={Bag} alt='Bag.svg'></ImgBag>
            </BagBackground>
        </FlexDiv>
        </ProductCard>
        </FlexWrap>
        </>
    )
}