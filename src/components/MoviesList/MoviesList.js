import { Link, useLocation } from 'react-router-dom';

import { Container, CardWrapper, Img, MovieTitle } from './MoviesList.styled';
export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <Container>
            {movies.map(({ id, title}) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
                  <Img src="https://via.placeholder.com/960x240" alt="title" />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </CardWrapper>
      ))}
    </Container>
    )
}