import Container from "@/components/dashboard/Container";
import Frokesy from "@/components/templates/Frokesy";
import ContactInfo from "@/components/templates/edit/ContactInfo";
import Education from "@/components/templates/edit/Education";
import Experience from "@/components/templates/edit/Experience";
import PersonalDetails from "@/components/templates/edit/PersonalDetails";
import Skills from "@/components/templates/edit/Skills";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const Template = () => {
  const router = useRouter();
  const resumeId = router.query.slug;
  const [showTemplate, setShowTemplate] = useState(false);
  const [resumeDetails, setResumeDetails] = React.useState({
    personalDetails: {
      id: Math.floor(Math.random() * 1000),
      name: "",
      role: "",
      about: "",
    },
    education: [],
    contactInfo: [],
    skills: [],
    experience: [],
  });

  const getEntries = (section: string, data: any) => {
    setResumeDetails({ ...resumeDetails, [section]: data });
  };

  return (
    <Container>
      <div className="lg:mt-10 lg:hidden flex lg:justify-betwee mx-auto">
        {showTemplate ? (
          <div className="text-[#000] h-[95vh] overflow-auto">
            <Frokesy value={resumeDetails} setShowTemplate={setShowTemplate} />
          </div>
        ) : (
          <div className="w-[95%] mx-auto h-[95vh] overflow-auto">
            <div className="flex justify-end lg:hidden mt-10">
              <button
                className="text-[#fff] bg-[#0e6e97] px-4 py-2 flex items-center space-x-2 font-semibold rounded-md"
                onClick={() => setShowTemplate(!showTemplate)}
              >
                <FaEye />
                <span>preview</span>
              </button>
            </div>
            <PersonalDetails collectEntries={getEntries} />
            <Education collectEntries={getEntries} />
            <ContactInfo collectEntries={getEntries} />
            <Skills collectEntries={getEntries} />
            <Experience collectEntries={getEntries} />
          </div>
        )}
      </div>
      <div className="mt-10 flex lg:justify-between mx-auto">
        <div className="w-[40%] h-[95vh] overflow-auto">
          <div className="flex justify-end lg:hidden mt-10">
            <button
              className="text-[#fff] bg-[#0e6e97] px-4 py-2 flex items-center space-x-2 font-semibold rounded-md"
              onClick={() => setShowTemplate(!showTemplate)}
            >
              <FaEye />
              <span>preview</span>
            </button>
          </div>
          <PersonalDetails collectEntries={getEntries} />
          <Education collectEntries={getEntries} />
          <ContactInfo collectEntries={getEntries} />
          <Skills collectEntries={getEntries} />
          <Experience collectEntries={getEntries} />
        </div>

        <div className="text-[#000] h-[95vh] overflow-auto">
          <Frokesy value={resumeDetails} setShowTemplate={setShowTemplate} />
        </div>
      </div>
    </Container>
  );
};

export default Template;
