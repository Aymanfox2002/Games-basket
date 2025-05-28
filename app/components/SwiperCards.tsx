"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";

const SwiperCards = ({
  items,
  paginationImg,
  className,
}: {
  items: { src: string; card: ReactNode }[];
  paginationImg?: boolean;
  className?: string;
}) => {
  // State to manage the swiper instance and progress
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1.5));
    }, 101);
    return () => clearInterval(t);
  }, [progress]);
  useEffect(() => {
    swiper?.on("slideChange", () => {
      setProgress(0);
    });
  }, [swiper]);
  return (
    <div
      className="flex flex-col gap-4"
      onClick={() => setProgress((prev) => prev + 1)}
    >
      <Swiper
        autoplay={{ delay: 7000 }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        className={`w-full ${className || "h-96 border-amber-300"}`}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {items.map(({ card }, i) => (
          <SwiperSlide key={i}>{card}</SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-4 items-center">
        {paginationImg &&
          items.map(({ src }, i) => (
            <div
              onClick={() => swiper?.slideTo(i)}
              key={i}
              className={`${
                swiper?.realIndex === i && "opacity-100 "
              } w-full h-40 relative rounded-2xl overflow-hidden cursor-pointer opacity-50 hover:opacity-100 duration-200 hover:translate-y-5`}
            >
              {swiper?.realIndex === i && (
                <div
                  style={{ width: `${progress}%` }}
                  className="absolute h-full inset-0 bg-gray-300 z-10 opacity-50 duration-200"
                ></div>
              )}
              <Image
                src={src}
                alt="Image-pagination"
                fill
                className="object-cover object-right"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SwiperCards;
