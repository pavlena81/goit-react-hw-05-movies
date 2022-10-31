import { useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { BackLink } from "components/BackLink/BackLink";


export const MovieDetails = () => {

  const location = useLocation();
  const backLink = location.state?.from ?? "/movies";
    return (
      <main>
       <BackLink to={backLink}>Go back</BackLink> 
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          additional information
        </h2>
        <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>        
      </ul>
      <Outlet />
      </div>
    </main>
    )
}