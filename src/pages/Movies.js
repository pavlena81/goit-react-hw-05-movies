import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchInput } from "components/SearchInput";
import { searchMovie } from "services/api"; 

//import { Navigate } from "react-router-dom";
//import { Notify } from 'notiflix/build/notiflix-notify-aio';


const Movies = () => {
    
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get('query') ?? "";
    
    useEffect(() => {
       
         if (searchParams.get('query')) {
            async function searchMovies() {
            setMovies((await searchMovie(searchParams.get('query'))).results)
            }               
          
             searchMovies()
         }
        
    },[query, searchParams])
    console.log(movies);
    
     
//Квери в инпут только при сабмите формы записывайте, при ончендже не надо
    const onSearchInput = e => {       
        const value = e;        
        setQuery(value);  
        
        setSearchParams({query: value}); 
       
    }    
    
    return (
        <main>
            <SearchInput                    
                value={querySearch}
                onChange={onSearchInput}
             />
            {movies.length === 0 && querySearch ?
                (<h2>Sorry, there isn`t any movies</h2>)
                    //, Notify.info('Sorry, there isn`t any movies','Close after 3000ms', 3000))
                   
               
                :(<MoviesList movies = { movies } />
           )}
            
            
            {/* <MoviesList movies = { movies } /> */}
        </main>
    )
}

export default Movies;