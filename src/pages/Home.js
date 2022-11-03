import { getTrending } from "services/api";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ItemHome } from "./Home.styled";

export const Home = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getTrend() {
         setMovies((await getTrending()).results)  
        } 
        
        getTrend();
    }, []);
     console.log(movies)
    return (
        <main>
            <h1>Trending today</h1>
            {movies.length > 0 && (
                <ul>
                   
                    {movies.map(({ id, title }) => (
                        
                        <ItemHome key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>   
                                {title}</Link>
                        </ItemHome>
                    ))}
                </ul>
            )}
            
        </main>
    )
}