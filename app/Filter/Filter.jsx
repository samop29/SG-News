"use client";
import React from "react";
import { useState, useContext } from "react";
import MyContext from "../Context/Context";
import Headline from "../Headline/Headline";
export default function Filter() {
  const filter = [
    "India",
    "Bitcoin",
    "Apple",
    "Android",
    "Tesla",
    "Modi",
    "Bangladesh",
    "Tata",
    "Mumbai",
    "Delhi",
    "Business",
    "Oil",
    "Gold",
  ];
  const { topic, setTopic } = useContext(MyContext);
  const [activeFilter, setActiveFilter] = useState(null);
  const filterchange = (value) => {
    setActiveFilter(value);

    setTopic(value);
    console.log(value);
  };
  return (
    <>
      <div className="lg:px-[15rem]">
        <div className="text-center lg:text-[6rem] md:text-[5rem] text-[2.7rem] mt-[1rem] border-b-2 font-medium ">
          Times Of Ohio
        </div>
        <Headline className="w-full mt-[2rem] " />
        <div className="mt-[2rem] flex gap-1 flex-wrap px-[.5rem]">
          {filter.map((value, index) => (
            <button
              key={index}
              className="border w-fit px-3 rounded-xl border-cblue text-[.5rem] lg:text-[1rem] md:text-[1rem]"
              onClick={() => filterchange(value)}
              style={{
                color: activeFilter === value ? "white" : "black",
                background: activeFilter === value ? "#071952" : "transparent",
              }}>
              {value}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
