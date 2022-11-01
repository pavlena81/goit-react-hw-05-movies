
import { getMovieCredits } from "services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { List, Item } from "./Cast.styled";



const placeholder = 'https://media.istockphoto.com/photos/rendered-classic-sculpture-metaverse-avatar-with-network-of-lowpoly-picture-id1401980646?b=1&k=20&m=1401980646&s=170667a&w=0&h=KxgnhtW2_Q3LUOCwJXYlj27vVlkrfcBk789d-cNZURk='

export const Cast = () => {
    const {id} = useParams();
    const [movieCast, setMovieCast] = useState([]);

    useEffect(() => {
        async function getMovie(id) {
      try {
        const data = await getMovieCredits(id);
        setMovieCast(data.cast);
      } catch (error){
         console.log(error)
        }
        }
         getMovie(id);
    },[id])
 
     console.log(movieCast)
    return (
        <>
            {movieCast.length > 0 &&(
            <List>
                {movieCast.map(({ id, profile_path, character, name }) => {                
                    const poster = profile_path
                        ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                        : placeholder;
                    
                return (                    
                    <Item key={id}>
                        <img src={poster} alt={name} width="300" height="450"/>
                    <h3>{name}</h3>
                    <p>Character {character}</p>
                    </Item>
                    
                )
            })}
            </List>
             )}
        </>
    )
}