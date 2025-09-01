"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaFilm, FaStar, FaUsers, FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function DashboardContent() {
  const stats = [
    {
      title: "Total Movies",
      value: 1200,
      icon: <FaFilm className="text-3xl text-indigo-500" />,
    },
    {
      title: "Top Rated",
      value: 320,
      icon: <FaStar className="text-3xl text-yellow-400" />,
    },
    {
      title: "Users",
      value: 850,
      icon: <FaUsers className="text-3xl text-green-500" />,
    },
    {
      title: "Active Analytics",
      value: "Stable",
      icon: <FaChartLine className="text-3xl text-red-500" />,
    },
  ];

  const recentMovies = [
    { title: "Inception", genre: "Sci-Fi", rating: "8.8" },
    { title: "Avengers: Endgame", genre: "Action", rating: "8.4" },
    { title: "Titanic", genre: "Romance", rating: "7.8" },
    { title: "Joker", genre: "Drama", rating: "8.5" },
  ];

  return (
    <div className="p-6 space-y-10">


      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
            <CardContent className="flex items-center space-x-4">
              <div>{stat.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{stat.title}</h3>
                <p className="text-gray-600">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Movies Table */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Recent Movies</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Genre</th>
                  <th className="px-4 py-2">Rating</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentMovies.map((movie, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-2">{movie.title}</td>
                    <td className="px-4 py-2">{movie.genre}</td>
                    <td className="px-4 py-2">{movie.rating}</td>
                    <td className="px-4 py-2">
                      <Link href="/movies">
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Action Section */}
      <div className="flex flex-wrap gap-4">
        <Link href="/admin/movies">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
            Add New Movie
          </Button>
        </Link>
        <Link href="/genres">
          <Button className="bg-green-600 text-white hover:bg-green-700">
            Manage Genres
          </Button>
        </Link>
      </div>
    </div>
  );
}
