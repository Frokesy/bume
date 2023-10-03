import React, { FC } from "react";
import Layout from "./Layout";
import HeaderSection from "./sections/HeaderSection";
import SkillSection from "./sections/SkillSection";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";

interface TemplateProps {
  value: any;
}
const Frokesy: FC<TemplateProps> = ({ value }) => {
  return (
    <>
      <Layout>
        <HeaderSection name={value.name} role={value.role} />
        <div className="flex justify-between">
          <div id="1" className="border-r w-[50%] max-w-[50%] border-[#808080] mt-6 px-6">
            <div className="border-[3px] border-b-[#808080] w-[15%]"></div>
            <AboutSection about={value.about} />
            <EducationSection education={value.education} />
            <ContactSection contactInfo={value.contactInfo} />
            <SkillSection skills={value.skills} />
          </div>

          {/* Right side */}
          <div className="w-[50%] px-6">
            <ExperienceSection />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Frokesy;
