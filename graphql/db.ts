import axios from "axios";

export const getMovies = async() =>{
  const {data:{results}} = await axios("https://api.themoviedb.org/3/movie/now_playing?api_key=06b5777bd7091c31d1100bb540924fed&language=en-US&page=1")
  return results
}

export const movieDetail = async(id) =>{
  const {data:results} = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=06b5777bd7091c31d1100bb540924fed&language=en-US&page=1`,{
    params:{
      append_to_response:"videos"
  }})
  return results
}