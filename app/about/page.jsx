"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaFilm, FaStar, FaUsers, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      icon: <FaFilm className="text-4xl text-indigo-500" />,
      title: "Explore Movies",
      description: "Browse movies by genre, popularity, and ratings with ease.",
      link: "/admin/movies", // Link to Movies Page
    },
    {
      icon: <FaStar className="text-4xl text-yellow-400" />,
      title: "Top Rated",
      description: "Discover top-rated movies and hidden gems curated for you.",
    },
    {
      icon: <FaUsers className="text-4xl text-green-500" />,
      title: "Community",
      description: "Join a community of movie enthusiasts and share reviews.",
    },
    {
      icon: <FaEnvelope className="text-4xl text-red-500" />,
      title: "Contact Us",
      description: "Reach out to us anytime at support@cinescope.com.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">About Cinescope</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Cinescope is your ultimate movie platform to explore, discover, and enjoy films
          from every genre. Dive into detailed movie info, ratings, and more!
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>

              {/* Link Button */}
              {feature.link && (
                <Link href={feature.link}>
                  <Button className="mt-2">Go to {feature.title}</Button>
                </Link>
              )}

              {feature.title === "Contact Us" && (
                <Button
                  as="a"
                  href="mailto:support@cinescope.com"
                  variant="default"
                  className="mt-2"
                >
                  Email Us
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Exploring Today!</h2>
        <Link href="/admin/movies">
          <Button className="text-white bg-indigo-600 hover:bg-indigo-700">
            Browse Movies
          </Button>
        </Link>
      </div>
    </div>
  );
}
