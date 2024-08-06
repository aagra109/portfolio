import About from "@/components/About";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import React from "react";

const Page = () => {
  return (
    <div>
      <Introduction />
      <About />
      <Experience />
      {/* <About />
      <About /> */}
    </div>
  );
};

export default Page;
