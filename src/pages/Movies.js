import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react"

import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchInput } from "components/SearchInput";
import { searchMovie } from "services/api"; 

export const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
        async function searchMovies() {
            setMovies((await searchMovie()).results)
        }
        searchMovies()
    },[query])

    const queryTitle = searchParams.get('query') ?? "";

    // const visibleMovies = movies.filter((movie) =>
    //     movie.query.toLowerCase().includes(queryTitle.toLowerCase())
    // );

    const onSearchInput = (query) => {

        const value = query.value;
        setQuery(value);
        // const nextMovies = query !== "" ? { query } : {};
        setSearchParams({query: value});
    };
    
    return (
        <main>
            <SearchInput value={queryTitle} onChange={onSearchInput} />
            <MoviesList movies={movies} />
            <h2>additional information</h2>
        </main>
    )
}