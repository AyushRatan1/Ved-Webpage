"use client";
import React from "react";
import { PinContainer } from "./pin";
import Heading from "./Heading"; // Import Heading component
import Button from "./Button";

// Benefits data with images
export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Allows students to quickly find answers to learning questions without extensive searching.",
    image: "ved1.png", // Add image for this benefit
  },
  {
    id: "1",
    title: "Continuous learning",
    text: "Uses advanced AI to support adaptive learning and provide relevant content over time.",
    image: "ved-3.png", // Add image for this benefit
  },
  {
    id: "2",
    title: "Accessible anywhere",
    text: "Enables access to Ved AI on any device, making learning more convenient.",
    image: "ved-5.png", // Add image for this benefit
  },
  {
    id: "3",
    title: "Real-time responses",
    text: "Provides fast and accurate responses to support timely learning.",
    image: "ved-6.png", // Add image for this benefit
  },
  {
    id: "4",
    title: "Comprehensive support",
    text: "Assists with a wide range of educational topics for a complete learning experience.",
    image: "ved-7.png", // Add image for this benefit
  },
];

// Component to render multiple cards
export function AnimatedPinDemo() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <Heading
          className="md:max-w-md lg:max-w-2xl mb-12"
          title="Learn Smarter, Achieve More with Ved AI"
        />
        {/* Cards */}
        <div className="h-auto w-full flex flex-wrap items-center justify-center gap-6">
          {benefits.map((benefit) => (
            <PinContainer key={benefit.id} title={benefit.title} href="#">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                {/* Image */}
                <div className="flex justify-center items-center h-2/3 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-lg overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 mt-4">
                  {benefit.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">{benefit.text}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          ))}
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="https://v0-product-launch-waitlist-eight-chi.vercel.app/">Let's Dive In</Button>
        </div>
      </div>
    </section>
  );
}

export default AnimatedPinDemo;
