import styled from 'styled-components';


// interface CircleProps {
//   isClicked: boolean;
// }

export const FilterStyles = styled.div`
width:100%;
display:flex;
flex-direction:column;
`

export const Button = styled.button`
width:131px;
height:45px;
display: inline-flex;
padding: 14px 32px;
justify-content: center;
align-items: center;
gap: 12px;
border-radius: 43px;
background: #0b0b80;
border:none;
cursor:pointer;
color: var(--gray-scale-white, #FFF);
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 120%; 
transition: transform 0.2s ease; /* Add transition for smoother animation */

&:hover {
  transform: scale(1.05); /* Scale up on hover */
}

&:active {
  transform: scale(0.95); /* Scale down on click */
}
`

export const FlexDiv = styled.div`
height:50px;
display:flex;
align-items:center;
justify-content:space-between;
margin-top:10px;

`
export const H4 = styled.h4`
color: var(--gray-scale-gray-900, #1A1A1A);
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 150%;
`

export const Img = styled.img`
width:16px;
height:16px;
`

export const Li = styled.li`
height:50px;
display:flex;
align-items:center;
gap:10px;
`

interface CircleProps {
  checked: boolean;
}

export const Circle = styled.input.attrs({ type: 'radio' })<CircleProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? '#0b0b80' : 'transparent')};
  cursor: pointer;
  border: 1px solid #808080;
`

export const H5 = styled.h5`
color: #1A1A1A;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
`
export const Span = styled.span`
color: #1A1A1A;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
`
export const Line = styled.div`
width:100%;
margin-top:15px;
border: 1px solid  #E6E6E6;
`