import React from "react";
import SwiperCards from "./SwiperCards";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardInfo from "./CardInfo";

const Hero = () => {
  return (
    <div className="border mt-8 ">
      <SwiperCards
        items={[
          {
            card: (
              <section className="relative rounded-4xl overflow-hidden h-full w-full">
                <video
                  autoPlay
                  muted
                  loop
                  className="absolute h-full w-full inset-0 object-cover object-top "
                >
                  <source src="/spidervideo.mp4" type="video/mp4" />
                </video>
                <CardInfo
                  img="/news1title.webp"
                  title="Spider-Man 2"
                  des="Swing into action as Peter Parker and Miles Morales in an epic battle against new and classic villains."
                  btn={{ cln: "bg-red-600 hover:bg-red-500", text: "Find Out More", href: "/" }}
                />
              </section>
            ),
            src: "/poster.webp",
          },
          {
            card: (
                <section className="relative rounded-4xl overflow-hidden h-full w-full">
                <video
                  autoPlay
                  muted
                  loop
                  className="absolute h-full w-full inset-0 object-cover object-top"
                >
                  <source
                  src="/call-of-duty-black-ops-6-animated-hero-mobile-01-en-22may24.mp4"
                  type="video/mp4"
                  />
                </video>
                <CardInfo
                  img="/call-of-duty-black-ops-6-logo-01-en-21may24.webp"
                  title="Call of Duty: Black Ops 6"
                  des="Experience the next chapter in the iconic Black Ops series with intense action and gripping storytelling."
                  btn={{ cln: "bg-yellow-600 hover:bg-yellow-500", text: "Find Out More", href: "/" }}
                />
                </section>
              ),
              src: "/call-of-duty-black-ops-6-hero-desktop-01-en-21may24.webp",
              },
              {
              card: (
                <section className="relative rounded-4xl overflow-hidden h-full w-full">
                <video
                  autoPlay
                  muted
                  loop
                  className="absolute h-full w-full inset-0 object-cover object-top"
                >
                  <source
                  src="/cyberpunk-2077-phantom-liberty-video-hero-01-en-11sep23.mp4"
                  type="video/mp4"
                  />
                </video>
                <CardInfo
                  img="/iconcyber.webp"
                  title="Cyberpunk 2077: Phantom Liberty"
                  des="Dive into the dangerous world of Night City with the Phantom Liberty expansion for Cyberpunk 2077."
                  btn={{ cln: "bg-[#f5e936] hover:bg-amber-500", text: "Find Out More", href: "/", textColor: "text-black" }}
                />
                </section>
              ),
              src: "/cyb.webp",
              },
              {
              card: (
                <section className="relative rounded-4xl overflow-hidden h-full w-full">
                <Image
                  fill
                  alt="hero"
                  className="object-cover absolute w-full h-full"
                  src={
                  "/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp"
                  }
                />
                <CardInfo
                  img="/Dragon-Ball-Sparking-Zero-logo-01-03oct24.webp"
                  title="Dragon Ball: Sparking! ZERO"
                  des="Unleash legendary battles in the explosive new Dragon Ball: Sparking! ZERO fighting game."
                  btn={{ cln: "bg-blue-500 hover:bg-blue-400", text: "Find Out More", href: "/" }}
                />
                </section>
            ),
            src: "/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp",
          },
        ]}
        className="h-[30rem]"
        paginationImg
      />
    </div>
  );
};

export default Hero;
