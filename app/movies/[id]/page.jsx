import { getMovieById } from "@/actions/movies";
import MovieLoading from "./movie-loading";

//server component
export default async function MovieDetailsPage(props) {

    const {id}= await props.params
    const serch=await props.searchParams;
    const movie=await getMovieById(id);

    // console.log("moviedata:",movie);


   return  (
        <main className="flex flex-col  justify-center py-16 px-4 mx-auto ">
            <h1 className="text-amber-600 text-center font-bold text-xl">
                Movie Details
            </h1>
            <h2 className="text-center py-5">Movie: ID:{id}</h2>
            <h2 className="text-center py-5">Movie Title : {movie?.data.title}</h2>
            <h2 className="text-center py-5">Movie Plot : {movie?.data.plot}</h2>
            <MovieLoading/>
        </main>
   )
 }
// /movie/:id - React Router Route Parameter
// /movie/[id] - Next.js App Router Route Parameter
// /movie/[...id]