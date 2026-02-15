import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";
import React from "react";

const Page = () => {
  return (
    <main className="relative overflow-x-clip pb-12">
      <Introduction />
      <Skills />
      <Experience />
    </main>
  );
};

export default Page;
