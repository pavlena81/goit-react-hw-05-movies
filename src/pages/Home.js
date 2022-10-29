import { getTrending } from "services/api";
import { useState, useEffect } from 'react';


export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getTrend() {
         setMovies((await getTrending()).results)  
        } 
        getTrend();
    }, []);

    return (
        <main>
            <h1>Trending today</h1>
            {movies.length > 0 && (
                <ul>
                    {movies.map(({id,title}) => (
                        <li key={id}>{title}</li>
                    ))}
                </ul>
            )}
            
        </main>
    )
}