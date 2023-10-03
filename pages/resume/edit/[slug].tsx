import Container from "@/components/dashboard/Container";
import Frokesy from "@/components/templates/Frokesy";
import Input from "@/components/templates/Input";
import ContactInfo from "@/components/templates/edit/ContactInfo";
import Education from "@/components/templates/edit/Education";
import Skills from "@/components/templates/edit/Skills";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Template = () => {
  const router = useRouter();
  const resumeId = router.query.slug;
  const [resumeDetails, setResumeDetails] = React.useState({
    name: "",
    role: "",
    about: "",
    education: [],
    contactInfo: [],
    skills: [],
  });

  const getEntries = (section: string, data: any) => {
    setResumeDetails({ ...resumeDetails, [section]: data });
  };

  return (
    <Container>
      <div className="mt-10 flex justify-between mx-auto">
        <div className="w-[40%] h-[95vh] overflow-auto">
          <h2 className="text-[#fff] pt-4 pb-3 text-[20px] font-semibold">
            Personal Details
          </h2>
          <div className="flex justify-between space-x-4 pb-6">
            <Input
              placeholder="full name"
              value={resumeDetails.name}
              onChange={(e) =>
                setResumeDetails({ ...resumeDetails, name: e.target.value })
              }
            />
            <Input
              placeholder="job title"
              value={resumeDetails.role}
              onChange={(e) =>
                setResumeDetails({ ...resumeDetails, role: e.target.value })
              }
            />
          </div>
          <Input
            textarea
            value={resumeDetails.about}
            onChange={(e) =>
              setResumeDetails({ ...resumeDetails, about: e.target.value })
            }
            placeholder="a little about yourself...."
          />

          <Education collectEntries={getEntries} />
          <ContactInfo collectEntries={getEntries} />
          <Skills collectEntries={getEntries} />
        </div>
        <div className="text-[#000] h-[95vh] overflow-auto">
          <Frokesy value={resumeDetails} />
        </div>
      </div>
    </Container>
  );
};

export default Template;
