
//hero banner Section

export default function Herobanner(

  {title = "CineScope Movie Database",
  description = "Sample Description Here..."}


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
        <p className="text-white text-center text-xl">{description}</p>
    </div>
 

  </section>

  );
}
