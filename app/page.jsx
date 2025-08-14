//SSR Server side rendering-server component  

import Mynavbar from "@/components/header-nav";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen ">
      <Mynavbar/>
   
      <main className=" bg-primary h-screen ">
        main section
      </main>
      <footer className=" bg-amber-200 h-72">
        Footer section
    

      </footer>
    </div>
  );
}
