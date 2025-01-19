"use client";
import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { useState, useEffect } from "react";

const CardSh = ({
  title,
  content,
  feturedImage,
  publishedAt,
  _createdAt,
  _id,
}: {
  title: string;
  content: any; // content ko appropriate type define karein
  feturedImage: any;
  publishedAt: string;
  _createdAt: string;
  _id: string;
}) => {
  // State to store truncated content
  const [truncatedContent, setTruncatedContent] = useState("");

  // Function to truncate content
  const truncateContent = (content: any) => {
    const text = content?.[0]?.children?.[0]?.text || "";
    if (text.length > 200) {
      return text.substring(0, 50) + "...";
    }
    return text;
  };

  // Effect hook to update truncated content
  useEffect(() => {
    const truncated = truncateContent(content);
    console.log("****",truncated)
    setTruncatedContent(truncated);
  }, [content]); // Runs when content changes

  console.log("truncatedContent...", truncatedContent)
  return (
    <div className="grid h-[auto] grid-cols-1 lg:grid-cols-2 cursor-pointer gap-[2vw] w-[60%] ml-5 px-[4vw] pt-[20px] mb-9">
      <div className="w-[300px]">
        <Image
          src={feturedImage || "/bl.jpg"} // Fetured image agar available ho to use karo
          alt="car"
          width={250}
          height={300}
          className="object-cover h-full"
        />
      </div>

      <div className="text-black overflow-hidden rounded-r-[10px] w-[500px] px-[2vw] pt-4 flex flex-col h-[100%] gap-3">
        <h1 className="text-xl md:text-[1.6vw] font-bold text-white w-[70%]">{title}</h1>
        <p className="text-gray-400 w-[50%]">{truncatedContent}</p>
        <p className="flex text-gray-400 items-center gap-3">
          <CiClock2 /> {publishedAt || "12/22/2024"}
        </p>

        <Link href={`/${_id}`}>
          <button className="bg-black text-teal-400 w-[200px] h-16 text-[1.2vw] rounded-[5px]">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardSh;
