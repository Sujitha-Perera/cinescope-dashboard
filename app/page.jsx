//SSR Server side rendering-server component  

import Mynavbar from "@/components/header-nav";
import FeatueredMovies from "@/components/home/featuered-movies";
import Herobanner from "@/components/home/hero-banner";


export const dynamic="force-dynamic";
// export const revalidate = 3600;

// SSR - Server Side Rendered - Server Component

export  default async function Home() {

  // const res = await fetch("http://localhost:3000/api/v1/movies", {
  //   cache: "no-store", // same as revalidate: 0
  // });

  // const movies = await res.json();
  return (
    <div className="flex flex-col  min-h-screen ">
      <Mynavbar/>
   
      <main className=" flex-1">
        <Herobanner />
        <FeatueredMovies/>
      </main>
      <footer className=" bg-amber-200 h-72">
        Footer section
    

      </footer>
    </div>
  );
}
