import {API_URL, API_KEY} from "./utils";

export const getTrendingMoviesFetch = (sortBy, curPage) =>
    fetch(
        `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sortBy}&page=${curPage}`,
        {
            method: "Get"
        }
    );



export const queryStringFetch = () => 
        fetch(
            `https://developers.themoviedb.org/3/discover/movie-discover?api_key=${API_KEY}`,
            {
                method: "Get"
            } 
        )