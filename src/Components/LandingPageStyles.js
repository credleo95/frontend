import styled from 'styled-components';

export const Button = styled.button`
  background-color: #46659b;
  color: white;
  padding: 10px 25px;
  border-radius: 30px;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #6a87b3;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;
export const TextDiv = styled.div`
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const Section = styled.section`
  text-align: center;
  margin: 0 auto;
  padding-top: 4rem;
  @media screen and (max-width: 768px) {
    padding: 50px;
    flex-flow: column nowrap;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
`;

export const Header = styled.h1`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;
