import React, { FC } from "react";
import Layout from "./Layout";
import HeaderSection from "./sections/HeaderSection";
import SkillSection from "./sections/SkillSection";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import { FaAngleDoubleLeft } from "react-icons/fa";

interface TemplateProps {
  value?: any;
  setShowTemplate?: any;
}
const Frokesy: FC<TemplateProps> = ({ value, setShowTemplate }) => {
  return (
    <>
      <div className="px-3 py-1 lg:hidden">
        <button onClick={() => setShowTemplate(false)} className="text-[#0e6e97] text-[15px] space-x-1 font-semibold flex items-center">
          <FaAngleDoubleLeft />
          <span>back</span>
        </button>
      </div>
      <Layout>
        <HeaderSection personalDetails={value?.personalDetails} />
        <div className="flex justify-between">
          <div id="1" className="border-r w-[50%] max-w-[50%] border-[#808080] mt-6 lg:px-6 px-3">
            <div className="border-[3px] border-b-[#808080] w-[15%]"></div>
            <AboutSection about={value?.personalDetails.about} />
            <EducationSection education={value?.education} />
            <ContactSection contactInfo={value?.contactInfo} />
            <SkillSection skills={value?.skills} />
          </div>

          {/* Right side */}
          <div className="w-[50%] lg:px-6 pl-3 pr-1">
            <ExperienceSection experience={value?.experience} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Frokesy;
