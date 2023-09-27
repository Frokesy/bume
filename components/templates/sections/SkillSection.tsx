import React from "react";

const SkillSection = () => {
  return (
      <div className="skills">
        <div className="border-[3px] border-b-[#808080] w-[15%] mt-6"></div>
        <h2 className="text-[20px] font-bold text-[#11466d] pt-2">Skills</h2>
        <ul className="grid grid-cols-1 gap-y-3 px-8">
          <li className="list-disc font-semibold text-[15px]">
            Lead & Strategy
          </li>
          <li className="list-disc font-semibold text-[15px]">Innovative</li>
          <li className="list-disc font-semibold text-[15px]">Team work</li>
          <li className="list-disc font-semibold text-[15px]">Goal oriented</li>
        </ul>
      </div>
  );
};

export default SkillSection;
