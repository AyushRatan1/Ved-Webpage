import React from "react";
import { MacbookScroll } from "./macbook-scroll";
import { robot3 } from "../assets";

function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F]">
      <MacbookScroll src={robot3} showGradient={false} />
    </div>
  );
}

export default MacbookScrollDemo;
