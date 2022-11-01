import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "7e0e8b7d0806f7d25e57eb5f9d4e36f7";

export async function getTrending() {
    const response = await axios.get(`${URL}/trending/movie/day?api_key=${API_KEY}`)
    return response.data;
}

export async function searchMovie(query) {
    const response = await axios.get(`${URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
    return response.data;
}


export async function getMovieId(id) {
    const response = await axios.get(`${URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    return response.data;
}

export async function getMovieCredits(id) {
    const response = await axios.get(`${URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    return response.data;
}

export async function getMovieReviews(id) {
    const response = await axios.get(`${URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    return response.data;
}