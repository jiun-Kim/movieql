import { getMovies, movieDetail } from "./db";

const resolvers = {
  Query: {
    movies :()=> getMovies(),
    movie:(_,{id}) => movieDetail(id)
  }
};

export default resolvers;
