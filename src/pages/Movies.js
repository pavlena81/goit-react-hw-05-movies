import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";


import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchInput } from "components/SearchInput";
import { searchMovie } from "services/api"; 

 const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
        if (searchParams.get('query')) {
            async function searchMovies() {
            setMovies((await searchMovie(searchParams.get('query'))).results)
        }
        
        searchMovies()
        }
        
    },[query, searchParams])
    console.log(movies);
    const queryTitle = searchParams.get('query') ?? "";

    
    const onSearchInput = e => {
        // e.preventDefault();
        const value = e;
        setQuery(value);
        setSearchParams({ query: value });
    }
    
    return (
        <main>
            <SearchInput value={queryTitle} onChange={onSearchInput} />
            <MoviesList movies={movies} />
           
            

        </main>
    )
}

export default Movies;