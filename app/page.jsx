//SSR Server side rendering-server component  

import Mynavbar from "@/components/header-nav";
import FeatueredMovies from "@/components/home/featuered-movies";
import Herobanner from "@/components/home/hero-banner";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen ">
      <Mynavbar/>
   
      <main className=" flex-1">
        <Herobanner/>
        <FeatueredMovies/>
      </main>
      <footer className=" bg-amber-200 h-72">
        Footer section
    

      </footer>
    </div>
  );
}
