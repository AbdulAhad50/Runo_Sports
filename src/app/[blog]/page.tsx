"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "src/sanity/lib/client"; // Sanity client import
import { urlFor } from "src/sanity/lib/image"; // Image utility import

interface T {
  title: string;
  content: [
    {
      children: [
        {
          text: string;
        }
      ];
    }
  ];
  feturedImage: any; // Image field in Sanity
  publishedAt: string;
  _createdAt: string;
  _id: string;
}

const Page = ({ params }: { params: { blog: string } }) => {
  const [blogData, setBlogData] = useState<T | null>(null); // Store fetched blog data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [isMounted, setIsMounted] = useState(false); // Client-side mounted flag

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);

    async function fetchSingleData(id: string) {
      try {
        setLoading(true);
        const data = await client.fetch(`*[_type == "blog"]`);
        const find = data.find((elem: T) => elem._id === id); // Find blog by _id
        setBlogData(find || null); // Set found blog data or null if not found
      } catch (err) {
        console.error("Error fetching blog data:", err);
      } finally {
        setLoading(false);
      }
    }

    if (params.blog) {
      fetchSingleData(params.blog); // Fetch blog data when the params change
    }
  }, [params.blog]); // Dependency array ensures effect runs when `params.blog` changes

  // Skip rendering until mounted to avoid SSR mismatch
  if (!isMounted) {
    return null; // Prevent mismatch during SSR
  }

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (!blogData) {
    return <div>No blog found.</div>; // Show error message if no blog data is found
  }

  // Check if feturedImage exists and has a valid URL
  const imageUrl = blogData.feturedImage ? urlFor(blogData.feturedImage)?.url() : null;

  return (
    <div className="w-[100%] h-auto">
      <h1 className="w-70% h-auto text-[50px] font-bold ml-6">{blogData.title}</h1>

      <h2 className="ml-8 text-[40px] font-bold">Published on: {blogData.publishedAt}</h2>

      {/* Displaying featured image if it exists */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={blogData.title}
          width={500} // Adjust the width as needed
          height={300} // Adjust the height as needed
        />
      ) : (
        <div>No image available</div> // Fallback if image URL is not valid
      )}

      {/* Displaying full content */}
      <p className="w-[70%] h-auto ml-8 text-justify mt-2 mb-8">
        {blogData.content?.map((block, index) => (
          <span key={index}>{block.children[0].text}</span>
        ))}
      </p>
    </div>
  );
};

export default Page;
