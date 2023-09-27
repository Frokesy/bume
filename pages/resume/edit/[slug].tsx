import Container from "@/components/dashboard/Container";
import Frokesy from "@/components/templates/Frokesy";
import InputField from "@/components/templates/InputField";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Template = () => {
  const router = useRouter();
  const resumeId = router.query.slug;
  const [resumeDetails, setResumeDetails] = React.useState({
    name: "",
    role: "",
    about: "",
  });
  return (
    <Container>
      <div className="mt-10 flex justify-between mx-auto">
        <div className="w-[40%]">
          <div className="flex justify-between space-x-4 pb-6">
            <InputField
              placeholder="name"
              value={resumeDetails.name}
              onChange={(e) =>
                setResumeDetails({ ...resumeDetails, name: e.target.value })
              }
            />
            <InputField
              placeholder="role"
              value={resumeDetails.role}
              onChange={(e) =>
                setResumeDetails({ ...resumeDetails, role: e.target.value })
              }
            />
          </div>
          <InputField
            textarea
            value={resumeDetails.about}
            onChange={(e) =>
              setResumeDetails({ ...resumeDetails, about: e.target.value })
            }
            placeholder="a little about yourself...."
          />
        </div>
        <div className="text-[#000]">
          <Frokesy value={resumeDetails} />
        </div>
      </div>
    </Container>
  );
};

export default Template;
