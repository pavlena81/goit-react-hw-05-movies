import {useLocation } from 'react-router-dom';

import { Container, CardWrapper, MovieTitle, StyledLink } from './MoviesList.styled';
export const MoviesList = ({ movies}) => {
   console.log(movies);
    const location = useLocation();
    return (
        <Container>
            {movies.map(({ id, title}) => (
        <CardWrapper key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                  {/* <Img src="https://via.placeholder.com/960x240" alt="" /> */}
            <MovieTitle>{title}</MovieTitle>
          </StyledLink>
        </CardWrapper>
      ))}
    </Container>
    )
}