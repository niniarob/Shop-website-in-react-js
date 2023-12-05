import styled from 'styled-components';

export const ParentDiv = styled.div`
// width:100%;
width: calc(100% - 300px);
// height:100vh;
// border:1px solid red;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-top:80px;
// gap:50px;
margin-bottom:60px;

`

export const ProductsImg = styled.img`
width:500px;
height:500px;
// border:1px solid black;
`

export const ColumnDiv = styled.div`
width:500px;
height:500px;
// border:1px solid black;
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
`

export const H1 = styled.h1`
color: var(--gray-scale-gray-900, #1A1A1A);
font-family: Poppins;
font-size: 30px;
font-style: normal;
text-align:start;
font-weight: 600;
line-height: 120%; 
// border:1px solid red;
margin-top:0;

`

export const ProductPrice = styled.p`
color: var(--branding-success-dark, #0b0b80);
font-family: Poppins;
font-size: 24px;
margin-top:10px;
margin-bottom:20px;
font-style: normal;
font-weight: 500;
line-height: 150%; 
`
export const DivLine = styled.div`
width:100%;
border:1px solid #E6E6E6;
`

export const Description = styled.p`
color: var(--gray-scale-gray-500, #808080);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
text-align:start;
line-height: 150%; 
`

export const ButtonDiv = styled.div`
width:100%;
margin-top:18px;
display:flex;
align-items:center;
margin-bottom:18px;
gap:12px;
`

export const Button = styled.button`
  display: flex;
  width: 457px;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: var(--gray-scale-white, #FFF);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  border-radius: 43px;
  background: var(--branding-success, #0b0b80);
  border: none;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: var(--branding-success-hover, #0b0b60);
    color: var(--gray-scale-white-hover, #EEE);
  }
`

export const HeartDiv = styled.div`
width:50px;
height:50px;
border-radius:50%;
// border-radius: 43px;
background: rgba(32, 181, 38, 0.10);
display:flex;
align-items:center;
justify-content:center;
`

export const CategoryTag = styled.h4`
color: var(--gray-scale-gray-900, #1A1A1A);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%;
text-align:start;
`

export const Span = styled.span`
color: var(--gray-scale-gray-500, #808080);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%;
text-align:start;

`