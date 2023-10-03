import Accordion from "@/components/Accordion";
import Container from "@/components/dashboard/Container";
import Frokesy from "@/components/templates/Frokesy";
import Input from "@/components/templates/Input";
import ContactInfo from "@/components/templates/edit/ContactInfo";
import Education from "@/components/templates/edit/Education";
import Experience from "@/components/templates/edit/Experience";
import PersonalDetails from "@/components/templates/edit/PersonalDetails";
import Skills from "@/components/templates/edit/Skills";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Template = () => {
  const router = useRouter();
  const resumeId = router.query.slug;
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

  console.log(resumeDetails);
  return (
    <Container>
      <div className="mt-10 flex justify-between mx-auto">
        <div className="w-[40%] h-[95vh] overflow-auto">
          <PersonalDetails collectEntries={getEntries} />
          <Education collectEntries={getEntries} />
          <ContactInfo collectEntries={getEntries} />
          <Skills collectEntries={getEntries} />
          <Experience collectEntries={getEntries} />
        </div>
        <div className="text-[#000] h-[95vh] overflow-auto">
          <Frokesy value={resumeDetails} />
        </div>
      </div>
    </Container>
  );
};

export default Template;
