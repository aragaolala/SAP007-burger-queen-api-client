import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: 100%;

  @media screen and (min-width: 481px) {
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    width: 51%;
  }
`;
export const StyleInput = styled.input`
  color: yellow;
  border: 1px solid black;
  background: none;
  outline: none;
  padding: 0.8rem;
  border-radius: 0.4rem;
  transition: 0.2s;
  display: block;
  height: 3rem;
  width: 100%;

  &:focus {
    border: 1px solid #531CB3;
  }

  &&::placeholder {
    font-size: 1em;
    color: #FFE74C;
  }
`;

export const Label = styled.label`
  display: block;
  width: 360px;
  line-height: 1;
  padding-bottom: 0.5rem;
  margin-top: 15px;
  text-align: left;
  color: #f7f7ff;

  @media screen and (min-width: 728px) {
    font-size: 0.8em;
  }
`;

export const ClientData = styled.input`
  width: 14rem;
  border: none;
  background-color: #531cb3;

  text-align: center;
  height: 3.5rem;
  font-size: 20px;
  color: #f7f7ff;
  border-radius: 0.4rem;
  margin-bottom: 15px;

  &&::placeholder {
    font-size: 1em;
    color: #f7f7ff;
  }
`;

/*
export const ClientData = styled.input`
 
  width: 14rem;
  border: none;
  background-color: #531cb3;
  
  text-align: center;
  height: 3.5rem;
  font-size: 20px;
  color: #f7f7ff;
  border-radius: 0.4rem;
  margin-bottom: 15px;

  &&::placeholder {
    font-size: 1em;
    color: #f7f7ff;
  }
  */
