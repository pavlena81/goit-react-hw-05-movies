import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  
  gap: 5px;
`;

export const CardWrapper = styled.div`
  
  > a {
    text-decoration: none;
    
  }
`;

export const Img = styled.img`
  width:100%;

`

export const MovieTitle = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  &:hover,
   :focus {
    cursor:pointer;
    color: #5972E8;
  }
   
 
`

export const StyledLink = styled(Link)`
 &:hover,
   :focus {
    cursor:pointer;
    // color: orangered;
  }
`