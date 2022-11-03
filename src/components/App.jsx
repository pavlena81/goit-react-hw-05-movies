import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";

import { Container, Header, Link } from "./App.styled";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

import { IconHome, IconMovie } from "./App.styled";
export const App = () => {
  return (
    
    
    <Container
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
    <Header>
        <nav>
          <Link to="/" end>
            <IconHome/>
            Home
          </Link>
          <Link to="/movies">
            <IconMovie/>
            Movies</Link>
          
        </nav> 
    </Header>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="movies" element={<Movies />}/>          
        
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews/>}/>
      </Route>
    </Routes>      
    </Container>
  );
};
