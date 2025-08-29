import { getMovieById } from "@/actions/movies";
import MovieLoading from "./movie-loading";

export async function generateMetadata(props) {
  const { id } = await props.params;
  const movie = await getMovieById(id);

  return {
    title: movie?.data?.title
      ? `CineScope | ${movie.data.title}`
      : "CineScope | Movie Details",
    description:
      movie?.data?.plot ??
      "Find your favorite movie ratings and recommendations",
  };
}

//server component
export default async function MovieDetailsPage(props) {

    const {id}= await props.params
    // const serch=await props.searchParams;
    const movie=await getMovieById(id);

  // Simulate a delay for demonstration (2 seconds)
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

    // console.log("moviedata:",movie);
if(!movie || !movie.data){
throw new Error ("movie not found");
}
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