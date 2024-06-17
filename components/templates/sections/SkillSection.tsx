import React, { FC } from "react";

interface Props {
  skills: object[];
}

const SkillSection: FC<Props> = ({ skills }) => {
  return (
    <div className="skills">
      <div className="border-[3px] border-b-[#808080] w-[15%] mt-6"></div>
      <h2 className="lg:text-[20px] text-[16px] font-bold text-[#11466d] pt-2">Skills</h2>
      <ul className="grid grid-cols-1 gap-y-3 px-8">
        {skills?.length !== 0 ? (
          skills?.map((tab: any) => (
            <li key={tab.id} className="list-disc content-loaded font-semibold lg:text-[15px] text-[13px] capitalize">
              {tab.skill}
            </li>
          ))
        ) : (
          <div>
            <li className="list-disc font-semibold lg:text-[15px] text-[13px]">
              Lead & Strategy
            </li>
            <li className="list-disc font-semibold lg:text-[15px] text-[13px]">Innovative</li>
            <li className="list-disc font-semibold lg:text-[15px] text-[13px]">Team work</li>
            <li className="list-disc font-semibold lg:text-[15px] text-[13px]">
              Goal oriented
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default SkillSection;
