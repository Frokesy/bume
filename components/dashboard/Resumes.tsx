import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Resumes = () => {
  return (
    <div className="mt-[7vh]">
      <div className="h-[70vh] w-[25vw] cursor-pointer flex items-center justify-center border border-[#404040]">
        <Link href={`/resume/new`} className="flex items-center space-x-2">
          <FaPlus size={14} />
          <span className="text-[14px]">Create new resume</span>
        </Link>
      </div>
    </div>
  );
};

export default Resumes;
