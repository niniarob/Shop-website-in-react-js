import styled from 'styled-components';


export const HeaderStyles = styled.div`
width:100%;
height:120px;
display:flex;
background-image: url('../../assets/Background.jpg');
background-size: cover;
background-position: center;
align-items:center;
`

export const HeaderChild = styled.div`
width: calc(100% - 300px);
display:flex;
gap:12px;
margin-left:11.3%;
`

export const Paragraph = styled.p`
color: var(--gray-scale-gray-400, #999);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; 

`
export const ProductName = styled.p`
color: var(--gray-scale-gray-400, #999);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
`