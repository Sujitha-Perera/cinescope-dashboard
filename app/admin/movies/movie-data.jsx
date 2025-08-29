import { db } from "@/lib/db";
import MovieTable from "./movie-table";
import { searchMovies } from "@/actions/movies";

export default async function MovieData({query=""}) {
    try {
        // const movies=await db.collection("movies_n").find({}).limit(50).toArray();
        // console.log("MovieData query::", query);
        const movies=await searchMovies(query);
        // console.log(movies);

        if(movies && movies.data.length > 0 ){

            const refinedmovies=movies.data.map((movie)=>({

                    _id: movie._id.toString(),
                    id: movie._id.toString(),
                    title: movie.title,
                    year: movie.year,
                    plot: movie.plot,
                    rated: movie.rated,
                    genres: movie.genres,
                    poster: movie.poster,
                    imdb: movie.imdb,
                    runtime: movie.runtime,
                    status: movie.status ?? "published",
                    directors: movie.directors,

            }))
            return <MovieTable movies={refinedmovies}/>
        } else {
            return (
            <div className="flex justify-center items-center h-[400px]">
                <p className="text-destructive font-medium animate-pulse duration-1000">
                No Movies Available!
                </p>
            </div>
            );
        }
        } catch (error) {
        console.log("Error fetching movies", error); // real fetch errors only
        return (
            <div className="flex justify-center items-center h-[400px]">
            <p className="text-destructive font-medium animate-pulse duration-1000">
                Failed to fetch movies!
            </p>
            </div>
        );
        }
//   return<div>MovieData</div>;
}
