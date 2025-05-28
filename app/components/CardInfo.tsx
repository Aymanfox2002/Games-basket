"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MotionItem from "./defaults/MotionItem";
const CardInfo = ({
  img,
  title,
  des,
  btn,
}: {
  img: string;
  title: string;
  des: string;
  btn: { cln: string; text: string; href: string; textColor?: string };
}) => {
  return (
    <MotionItem
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
      className="absolute left-10 top-10 max-w-md flex flex-col gap-4 "
    >
      <div className="w-full h-40 relative ">
        <Image fill alt={title} src={img} className=" object-contain" />
      </div>
      <h1 className="text-3xl text-white font-bold">{title}</h1>
      <p className="text-gray-300 font-semibold">{des}</p>
      <Button
        className={`${btn.cln} ${
          btn.textColor || "text-white"
        } cursor-pointer duration-200`}
      >
        {btn.text}
      </Button>
    </MotionItem>
  );
};

export default CardInfo;
