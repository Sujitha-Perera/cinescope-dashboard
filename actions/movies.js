//GET all movie action
//client part
"use server";
import { db } from "@/lib/db";
import { ObjectId } from "mongodb";
// import { success } from "better-auth/*";

//get all movie action
export const getMovies=async()=>{
    try {
        //using fetch API to get movies from the server
        const response=await fetch(`${process.env.API_BASE_URL}/v1/movies`,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                Accept:"application/json",
            },
            cache: "no-store",
        });

        if(!response.ok){
            throw new Error("Network response was not ok");

        }   
        if(response.status==200){
            return await response.json();
        }else{
            console.log("no movies found");
            return undefined;
        }
    } catch (error) {
        console.log("Error fetching movies",error);
        return undefined;

    }
}

//search movie(get all movies with filters action)
export const searchMovies=async (query)=>{
    try {
        const movies =await db
        .collection("movies_n")
        //serch by title (i= case insensitive) 
        .find({ title: { $regex: query, $options: "i"}})
        .limit(10)
        .toArray();
    console.log("Search Movies::", movies.length, query);

    if (movies && movies.length > 0) {
      return {
        success: true,
        message: "Movies fetched successfully!",
        data: movies,
      };
    } else {
      return {
        success: false,
        message: "No movies found!",
        data: [],
      }; 
     }
    } catch (error) {
        console.log("Mongodb fetch failed!",error);

        return{
            success:false,
            message:"Error fetching movies",
            data:[]
        }        
    }
}


//get all movie action
export const getMovieById=async(movieId)=>{

    try {
        const result = await db
            .collection("movies")
            .findOne(
                { _id: new ObjectId(movieId) } );

         console.log(result)   

        if(result && Object.keys(result).length>0){
            console.log(`A movie found with the _id: ${result._id}`)
            return{
                success:true,
                message:"Movie fetched successfully",
                data:result,
            }
        }else{
            return undefined;
        }
    } catch  {
        console.log("Mongodb fetch failed");
    }
}

// create movie action
export const createMovie=async(movie)=>{
    try {
        const result= await db.collection("movies_n").insertOne(movie);

        if(result.acknowledged){
            console.log(`A movie was inserted with the _id: ${result.insertedId}`)
            return{
                success:true,
                message:"Movie created successfully"
            }
        }else{
            return undefined;
        }
    } catch  {
        console.log("Mongodb insert failed");
    }
}

// update movie action
export const updateMovie = async (movieId, movieDoc) => {
  try {
    if (!movieId) throw new Error("Movie ID is missing");

    const result = await db
      .collection("movies_n")
      .updateOne(
        { _id: new ObjectId(movieId) }, 
        { $set: movieDoc },
        { upsert: false } 
      );

    if (result.acknowledged) {
      return {
        success: true,
        message: "Movie updated successfully!",
      };
    } else {
      return {
        success: false,
        message: "Movie update failed!",
      };
    }
  } catch (err) {
    console.log("MongoDB update failed!", err);
    return { success: false, message: err.message };
  }
};
// delete movie action
export const deleteMovie=async(movieId)=>{
    try {
        const result = await db
            .collection("movies_n")
            .deleteOne(
                { _id: new ObjectId(movieId) }

      );

        if(result.acknowledged){
            console.log(`A movie was Deleted with the _id: ${result.insertedId}`)
            return{
                success:true,
                message:"Movie deleted successfully"
            }
        }else{
            return undefined;
        }
    } catch  {
        console.log("Mongodb delete failed");
    }
}
