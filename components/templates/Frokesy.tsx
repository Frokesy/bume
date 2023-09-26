import React from "react";
import Layout from "./Layout";
import HeaderSection from "./HeaderSection";
import SkillSection from "./SkillSection";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";

const Frokesy = () => {
  return (
    <>
      <Layout>
        <HeaderSection />
        <div className="flex justify-between">
          <div id="1" className="border-r w-[50%] border-[#808080] mt-6 px-6">
            <div className="border-[3px] border-b-[#808080] w-[15%]"></div>
            <AboutSection />
            <EducationSection />
            <ContactSection />
            <SkillSection />
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
