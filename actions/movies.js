//GET all movie action
//client part
export const getMovies=async()=>{
    try {
        //using fetch API to get movies from the server
        const response=await fetch("http://localhost:3000/api/v1/movies",{
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