"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { createMovie } from "@/actions/movies";
import { getAllYears } from "@/lib/utils";


export function AddMovieForm({onClose}) {

    const router=useRouter();
    const years=getAllYears();
    const[isSubmitting,setIsSubmitting]=useState(false);
    // Controlled states
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedGenres, setSelectedGenres] = useState("");

    const handleClose=()=>{
            setSelectedYear(null);
            setSelectedGenres(null);
            onClose(false);
        }

    const handleSubmit=async(event)=>{
         //use async becauser backend call include in here and then need to wait 
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const title = formData.get("title");
            const year = formData.get("year");
            const director = formData.get("director");
            const genre = formData.get("genre");
            const rating = formData.get("rating");
            const runtime = formData.get("runtime");
            const overview = formData.get("overview");
            const poster = formData.get("poster");
            const backdrop = formData.get("backdrop");
            const movieStatus = formData.get("status");



    console.log("Form data",{
        title,
        year,
        director,
        genre,
        rating,
        runtime,
        overview,
        poster,
        backdrop,
        status:movieStatus,

    })

    setIsSubmitting(true);

    const response =await createMovie({

        title,
        year,
        directors:[director],
        genres:[genre],
        imdb:{rating: Number(rating)},
        runtime,
        plot:overview,
        poster,
        backdrop,
        status:movieStatus,
        lastupdated :new Date().toISOString(),

    })
    setIsSubmitting(false);

    if(response ?.success){
        console.log(response);
        handleClose();
        router.refresh();

    }

    };


  return (
    <form onSubmit={handleSubmit}className="space-y-4 ">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex flex-col gap-0.5 space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Movie title"
            required
          ></Input>
        </div>
        <div className="flex flex-col gap-0.5 space-y-2">
          <Label htmlFor="year">Year</Label>
          <Select 
            id="year" 
            name="year"
            onValueChange={setSelectedYear}
            value={selectedYear}
            >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
                 {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-0.5 space-y-2">
          <Label htmlFor="director">Director</Label>
          <Input
            id="director"
            name="director"
            placeholder=" director name"
          ></Input>
        </div>
        <div className="flex flex-col gap-0.5 space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select 
          id="genre" 
          name="genre" 
          onValueChange={setSelectedGenres}
          value={selectedGenres}
          required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Action">Action</SelectItem>
              <SelectItem value="Adventure">Adventure</SelectItem>
              <SelectItem value="Sci">Sci</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-0.5 space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder=" Movie rating (0.0-10.0)"
            required
          ></Input>
        </div>
        <div className="flex flex-col gap-0.5 space-y-2">
          <Label htmlFor="runtime">Runtime</Label>
          <Input
            id="runtime"
            name="runtime"
            type="number"
            min="1"
            step="1"
            placeholder="Runtime(minuits)"
            required
          ></Input>
        </div>
      </div>
      <div className="space-y-2 ">
        <Label htmlFor="overview">Overview</Label>
        <Textarea
          id="overview"
          name="overview"
          placeholder="Movie description"
          className="max-h-24"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex flex-col gap-0.5 space-y-2">
          <Label htmlFor="director">Poster URL</Label>
          <Input id="poster" name="poster" placeholder=" URL to poster image">
    
          </Input>
        </div>

        <div className="flex flex-col gap-0.5 space-y-2">
          <Label htmlFor="backdrop">Backdrop URL</Label>
          <Input
            id="backdrop"
            name="backdrop"
            placeholder=" URL to backdrop  image">

            </Input>
        </div>

        <div className="flex flex-col gap-0.5 space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select 
          id="status" 
          name="status" 
          
          required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button
          type="reset"
          variant="outline"
          className="min-w-[102px]"
          disabled={isSubmitting}
          onClick={handleClose}
        // onClick={()=> {
        //     setSelectedYear(null);
        //     setSelectedGenres(null);
        //     onClose(false);
        // }
        // }
        >
          Cancel
        </Button> 
         <Button 
         type="submit" 
         className="min-w-[102px]" 
         disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Movie"}
        </Button>
      </DialogFooter>
    </form>
  );
}
