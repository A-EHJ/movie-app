import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-responses";

const imageURL: string = "https://image.tmdb.org/t/p/w500/";

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: imageURL + movie.poster_path,
      backdrop: imageURL + movie.backdrop_path,
      rating: movie.vote_average,
    };
  };
}
