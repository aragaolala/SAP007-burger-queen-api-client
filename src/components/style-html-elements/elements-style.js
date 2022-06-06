import styled from "styled-components";

export const ParagraphUniversal = styled.p`
  color: white;
  margin-top: 0.7em;
  margin-bottom: 0.2em;
  margin-left: 10px;
  
`;

export const ParagraphOrderKitchen = styled.p `
  color: #FFE74C;
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
`;

export const ParagraphTitleStatusOrder = styled.p `
  color: ;
  
  text-align: center;
`;


export const ParagraphReadyOrders = styled(ParagraphUniversal)`
  color: #FFE74C;
  margin-top: 0.7em;
  font-style: italic;
`;

// erros messages
export const LoginRegisterParagraph = styled(ParagraphUniversal) `
color: #F7F7FF;
font-size: 0.7em;
`

export const LinkToRegisterStyle = styled.span`
color: #FFE74C;
font-family: 'Lato', sans-serif;
font-size: 1em;
`
// pedidos prontos e entregues
export const DefaultTitle = styled.p`
text-align: center;
font-size: 1em;

font-family: 'Lato', sans-serif;
border-radius: 0.4rem;
background-color: rgba(0,0,0, 0.8);
padding: 10px;

`
export const OrderSummaryH2 = styled.h2`
color: #FFE74C;
font-weight: bold;
font-size: 0.8em;
`
