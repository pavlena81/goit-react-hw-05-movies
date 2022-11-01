import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";


import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchInput } from "components/SearchInput";
import { searchMovie } from "services/api"; 

export const Movies = () => {
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

    // const visibleMovies = movies.filter((movie) =>
    //     movie.query.toLowerCase().includes(queryTitle.toLowerCase())
    // );

    // const onSearchInput = (query) => {

    //     const value = query.value;
        
    //     // const nextMovies = query !== "" ? { query } : {};
    //     setSearchParams({ query: value });
    //     setQuery(value);
    // };

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