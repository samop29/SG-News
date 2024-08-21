"use client";
import React, { useEffect, useState } from "react";

export default function Headline() {
  const [headline, setHeadline] = useState([]);
  useEffect(() => {
    const headlinecall = async () => {
      const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
      const fetchcall = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
      );
      const result = await fetchcall.json();
      const articals = result.articles;
      setHeadline(articals);
    };
    headlinecall();
  }, []);

  return (
    <>
      <div className="flex gap-10 font-[roboto] md:text-[1.5rem] text-[1rem] w-full mx-auto overflow-hidden ">
        <div className="flex animate-scroll gap-10">
          {headline.map((data) => (
            <div className="whitespace-nowrap" id={data.url}>
              | {data.title} |
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
