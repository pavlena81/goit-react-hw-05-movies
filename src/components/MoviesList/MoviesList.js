import { Link, useLocation } from 'react-router-dom';

import { Container, CardWrapper, MovieTitle } from './MoviesList.styled';
export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <Container>
            {movies.map(({ id, title }) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </CardWrapper>
      ))}
    </Container>
    )
}