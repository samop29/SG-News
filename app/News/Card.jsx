"use client";
import React from "react";
import Image from "next/image";
import news from "../assets/newsalt.webp";
export default function Card({ data }) {
  const handleClick = () => {
    window.open(data.url, "_blank");
    console.log(data.url);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className=" px-[1rem] md:px-[9rem] lg:px-[15rem] cursor-pointer lg:mt-[6rem] md:mt-[4rem] mt-[2rem]">
        <div className="  ">
          <div className="mx-auto flex flex-col justify-center items-center">
            <img
              src={data.urlToImage}
              alt="img"
              className="lg:w-[40%] md:w-[30rem] w-[25rem]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = { news };
              }}
              // style={{ width: "100%", height: "auto" }}
            />
            <h1 className="font-[roboto] font-bold lg:text-[2rem] md:text-[1.7rem] text-[1rem] md:leading-[2rem] lg:leading-[2rem] leading-[1.2rem] lg:w-[70%] mt-[1rem]">
              {data.title}
            </h1>
            <h4 className="font-[roboto] lg:w-[70%] lg:mt-[1rem] mt-[.5rem] md:text-[1rem] text-start text-[.5rem] lg:text-[1rem]">
              {data.content}
            </h4>
            <h5 className="self-end font-serif lg:text-[.8rem] md:text-[.8rem] text-[.5rem] lg:mr-[6rem] mt-[1rem] text-zinc-500">
              - {data.source.name}
            </h5>
            {/* <h5>{data.publishedAt}</h5> */}
          </div>
        </div>
      </div>
    </>
  );
}
