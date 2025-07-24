"use client";
import React from "react";
import { ContainerScroll } from "./ContainerScroll";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-7xl font-semibold text-white dark:text-white">
              Unleash the power
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none"></span>
              <br />
              <br />
            </h1>
          </>
        }
      >
        <img
          src={"/ved-3.png"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
export default HeroScrollDemo;
