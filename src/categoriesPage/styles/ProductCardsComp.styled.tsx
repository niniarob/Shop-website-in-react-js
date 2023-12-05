import styled from "styled-components";

export const FlexWrap = styled.div`
display: flex;  
flex-wrap: wrap;
width:68%;
gap:25px;
justify-content:space-between;;
`

export const ProductCard = styled.div`
width: 320px;
height: 450px;
display:flex;
flex-direction:column;
align-items:center;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid var(--gray-scale-gray-100, #E6E6E6);
background: var(--gray-scale-white, #FFF);
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: transform 0.2s ease-in-out;
&:hover {
  transform: scale(1.05);
}
`

export const FlexDiv =styled.div`
width:90%;
display:flex;
justify-content:space-between;
align-items: center;
margin-top:20px;
height:50px;
`
export const Tittle = styled.p`
color: var(--gray-scale-gray-700, #4D4D4D);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%;
margin-top:10px;
margin:0px;
text-align:center;
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
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: transform 0.1s ease-in-out;
&:hover {
  transform: scale(1.1);
  background: #42426b;
}
`

export const ImgBag = styled.img`
width:20px;
height:20px;
`

export const Iimg = styled.img`
width:302px;
height:302px;
margin-top:10px;
margin-bottom:20px;
`