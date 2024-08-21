"use client";
import React from "react";
import Image from "next/image";
import logo from "../assets/whitelogo.png";
import { useState, useContext } from "react";
import MyContext from "../Context/Context";
import "remixicon/fonts/remixicon.css";
export default function Header() {
  const { topic, setTopic } = useContext(MyContext);
  const topicchange = (e) => {
    setTopic(e.target.value);
  };

  return (
    <>
      <div className="bg-cblue flex items-center justify-around">
        <Image src={logo} className="md:w-[10rem] w-[4rem]" />
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            className="h-fit border-none outline-none px-[.4rem] md:px-[.8rem]  rounded-2xl md:py-[.3rem] py-[0] my-[.8rem]"
            placeholder="eg: bitcoin"
            onChange={topicchange}
          />
          <span>
            <i class="ri-search-line text-white md:text-[1.5rem] text-[1rem]"></i>
          </span>
        </div>
      </div>
    </>
  );
}
