"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "ved1.png",
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail: "ved-2.png",
  },
  {
    title: "Rogue",
    link: "#",
    thumbnail: "ved-3.png",
  },

  {
    title: "Editorially",
    link: "#",
    thumbnail: "ved-4.png",
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail: "ved-5.png",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail: "ved-7.png",
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail: "ved-2.png",
  },
  {
    title: "Editorially",
    link: "#",
    thumbnail: "ved-4.png",
  },
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "ved1.png",
  },
];
export default HeroParallaxDemo;
