import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { GiAbstract055 } from "react-icons/gi";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  
  > nav {
    display: flex;
  }  
  
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #5972E8;
  }  
`;

export const IconHome = styled(ImHome)`
margin-right:10px;
`
export const IconMovie = styled(GiAbstract055)`
margin-right:10px;
`