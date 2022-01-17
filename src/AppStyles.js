import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 1.5rem;
  font-weight: light;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
