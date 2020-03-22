export const getTrendingMoviesFetch = () =>
    fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=43d51e0d199eab5d93143f2c5071d8e1",
        {
            method: "Get"
        }
    );