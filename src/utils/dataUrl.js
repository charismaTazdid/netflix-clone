const Api_key = "40aec19e00a7723fe03955cba9040dcb";


const requests = {
    tranding: `/trending/all/week?api_key=${Api_key}&language=en-US`,
    orginal: `/discover/tv?api_key=${Api_key}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
    actionMovie: `/discover/movie?api_key=${Api_key}&with_genres=28`,
    comedeyMovie: `/discover/movie?api_key=${Api_key}&with_genres=35`,
    horrorMovie: `/discover/movie?api_key=${Api_key}&with_genres=27`,
    romanticMovie: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
    documentary: `/discover/movie?api_key=${Api_key}&with_genres=99`

}
export default requests;