"use client";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
// import { MOVIES } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
export default function MovieTable({movies}) {
  return (
    <div className="rounded-md border">
        <Table>
        <TableCaption className="sr-only">Admin Movie Table</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[80px]">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action </TableHead>

            </TableRow>
        </TableHeader>
        <TableBody>
            {movies.map((movie,key)=>(
            
            <TableRow key={movie.id}>
            <TableCell className="font-medium">{key+1}</TableCell>
            <TableCell><div className="flex items-center gap-2">
                <Image 
                src={movie.poster || "/images/movie-placeholder.png"} 
                alt={movie.title} 
                height={40}
                width={28}
                className="h-10 w-7 rounded object-cover"
                />
                <span className="font-medium">{movie.title}</span>
                </div>
                </TableCell>
            <TableCell>{movie.year}</TableCell>
            <TableCell>
                <div className="flex flex-wrap gap-1">
                {movie.genres.map((genre)=>(
                    <Badge key={genre} variant="outline" className="text-xs">{genre}</Badge>
                    ))}
                </div>
            </TableCell>
            <TableCell>{movie.rating}</TableCell>
           <TableCell className="capitalize">
                   <Badge className="bg-green-100 text-green-800">{movie.status}</Badge> 
            
            </TableCell>
            <TableCell className="text-right">
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent Align="end">
                        <DropdownMenuLabel>Movie Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
            </TableCell>
            </TableRow>

            ))}
        </TableBody>
        </Table>

    </div>
  )
}
