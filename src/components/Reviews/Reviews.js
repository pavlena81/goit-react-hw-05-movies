import { getMovieReviews } from "services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

import PropTypes from "prop-types";

import { ListReview, ItemReview } from "./Reviews.styled";

 const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReview] = useState([]);
   
    useEffect(() => {
        async function getReview(id) {
            try { 
                const data = await getMovieReviews(id);
                setReview(data.results);
            } catch(error) {
                console.log(error)
            }
        }
        getReview(id)
    }, [id])
    
    console.log(reviews);
    
    return (
        <>
            {reviews.length > 0 ? (
            <ListReview>
                {reviews.map(({ id, author, content } ) => {                
                   
                return (                    
                    <ItemReview key={id}>                        
                    <h3>Author: {author}</h3>
                    <p>{content}</p>                        
                    </ItemReview>
                    
                ) 
            })}
            </ListReview>) : (<p>We don't have any reviews for this movie.</p>)
             }
        </>
    )
}


Reviews.propTypes = {
  id: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      
    })
  ),
}

export default Reviews;