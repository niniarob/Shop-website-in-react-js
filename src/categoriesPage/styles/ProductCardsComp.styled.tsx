import styled from "styled-components";

export const FlexWrap = styled.div`
display: flex;  
flex-wrap: wrap;
width:68%;
gap:25px;
justify-content:space-between;;
`

export const ProductCard = styled.div`
width: 312px;
height: 395px;
display:flex;
flex-direction:column;
align-items:center;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid var(--gray-scale-gray-100, #E6E6E6);
background: var(--gray-scale-white, #FFF);
`

export const FlexDiv =styled.div`
display:flex;
justify-content:space-between;
align-items: center;
height:90px;
width:calc(100% - 16px)
`
export const Tittle = styled.p`
color: var(--gray-scale-gray-700, #4D4D4D);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%;
margin:0px;
`

export const PriceProduct = styled.p`
color: var(--gray-scale-gray-900, #1A1A1A);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 150%; 
margin-top:6px;
`

export const TitlePrice = styled.div`
display:flex;
flex-direction:column;
align-items:start;
`

export const DivImg  = styled.div`
margin-top:-15px;
`
export const BagBackground = styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
border: 1px solid var(--gray-scale-gray-100, #E6E6E6);
background: #CCCCCC;
`

export const ImgBag = styled.img`
width:20px;
height:20px;
`