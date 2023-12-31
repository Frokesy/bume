import Container from "@/components/dashboard/Container";
import Frokesy from "@/components/templates/Frokesy";
import Layout from "@/components/templates/Layout";
import Link from "next/link";
import React from "react";

const New = () => {
  return (
    <Container>
      <div className="px-10 pt-[10vh]">
        <h1 className="font-mono text-[24px] font-semibold">
          Create new resume
        </h1>

        <div className="mt-[5vh]">
          <h2 className="font-mono text-[20px] flex items-center justify-center">
            Choose a template
          </h2>
          <div className="grid grid-cols-3 h-[70vh] overflow-hidden">
            <Link href={`/resume/edit/${"Frokesy"}`}>
              <div className="cursor-pointer flex items-center text-[#000] justify-center">
                <Frokesy />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default New;
