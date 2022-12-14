import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Container, Header, Link, IconHome, IconMovie } from "./App.styled";


const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy (()=> import ('../pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() =>import ('../pages/NotFound'))

export const App = () => {
  return (
    
    
    <Container>
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
    <Suspense fallback={<h2>Loading...</h2>}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="movies" element={<Movies />}/>          
        
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews/>}/>
          </Route>
      <Route path="*" element={<NotFound/>}/>    
    </Routes> 
     </Suspense>    
    </Container>
  );
};
