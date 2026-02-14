import About from "@/components/About";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import React from "react";

const Page = () => {
  return (
    <main className="relative overflow-x-clip pb-12">
      <Introduction />
      <About />
      <Experience />
    </main>
  );
};

export default Page;
