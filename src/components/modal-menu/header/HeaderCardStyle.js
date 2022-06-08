import styled from 'styled-components';

// botoes dos menus que abrem os modais com os cardápios
export const ButtonCard = styled.button`
  background-color: #262322;
  cursor: pointer;
  padding: 0.1rem;
  border-radius: 0.4rem;
  border: none;
  width: 100%;
  box-shadow: rgb(255 252 252 / 31%) 0px 14px 28px,
    rgb(255 255 255 / 9%) 0px 10px 10px;

  &&:hover {
    background-color: #ffe74c;
  }
`;
export const Content = styled.div`
  height: 5rem;
  width: 70vh;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
`;

export const Title = styled.p`
  color: white;
  width: 100%;
  margin-left: 200px;
  font-family: "Lato", sans-serif;

  &:hover {
    color: black;
  }
`;
