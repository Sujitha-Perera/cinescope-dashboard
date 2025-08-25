// import { MOVIES } from "@/lib/data"
import { db } from "@/lib/db";
import { NextResponse } from "next/server"

//first GET api route
//server part
export const GET=async()=>{
    try {

        const movies=await db.collection("movies").find({}).limit(20).toArray();
        // return NextResponse.json(MOVIES, {status:200});
        return NextResponse.json(movies);
        
    } catch (error) {
        console.log("Error fetching data",error);

        return NextResponse.json(
            {error:"internal server error"},
            {status:500}
        )
    }


}