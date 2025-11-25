
//hero banner Section

//Dumb component
export default function Herobanner(

  {title = "CineScope Movie Dashboard",
  description = "Browse through a world of films, from timeless classics to the latest blockbusters. Search, \nfilter, and explore detailed movie information – all in one place."}


) {
  return (
  <section id="hero" className="relative overflow-hidden min-h-[70vh] ">
    <div className="absolute inset-0 z-0">
        <div className="bg-linear-to-r absolute inset-0 z-10 from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 z-0 bg-[url('/images/hero-1.jpg')] bg-cover opacity-60 dark:opacity-40">
                 

          </div>
    </div>
    
    <div className="relative z-20 " >     
        <h1 className="text-white text-6xl font-bold text-center py-20">
          {title}
        </h1>
        <p className="text-white text-center text-xl whitespace-pre-line">
          {description}
        </p>
    </div>
 

  </section>

  );
}
