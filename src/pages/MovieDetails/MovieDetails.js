import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import { BackLink } from "components/BackLink/BackLink";

import { getMovieId } from "services/api";
import PropTypes from "prop-types";
import { Container, Box } from "./MovieDetails.styled";

import { Suspense } from "react";

 const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [movieId, setMovieId] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? "/movies";
  
  useEffect(() => {
    async function getMovie(id) {
      try {
        const data = await getMovieId(id);
        setMovieId(data);
      } catch (error){
         console.log(error)
        }
    }
    getMovie(id);
    
  }, [id])
  

  if (!movieId) {
    return null;
  }
  console.log(movieId)
  

    return (
      <main>
        <BackLink to={backLink}>Go back</BackLink> 
        <Container>        
        <div>
            <img src={`https://image.tmdb.org/t/p/w300/${movieId.poster_path}`} alt={movieId.title} />
        </div>
                
        <Box>
            <h2>{movieId.title}{' '}
              {movieId.release_data === '' || movieId.release_data === undefined
                ? 'No date'
                : ` (${movieId.release_data.slice(0, 4)})`
              }
            </h2>
            <p>User Score: {movieId.vote_average}</p>
            <h2>Overview</h2>
            <p>{movieId.overview}</p>
            <h2>Genres</h2>
          <p>{movieId.genres.map(genre=>genre.name).join(', ')}</p>          
        </Box>
        </Container>
        <div>
        <h2>
          additional information
        </h2>
        <ul>
        <li>
          <Link to="cast" state={{from: BackLink}}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{from: BackLink}}>Reviews</Link>
        </li>        
        </ul>
        <Suspense fallback={<h2>Loading...</h2>}> 
          <Outlet />
        </Suspense>   
      </div>
    </main>
    )
}



MovieDetails.propTypes = {
  movieId: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  ),
}

export default MovieDetails;