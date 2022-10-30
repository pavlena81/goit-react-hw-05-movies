import { Link, Outlet } from "react-router-dom";


export const MovieDetails = () => {
    return (
        <main>
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