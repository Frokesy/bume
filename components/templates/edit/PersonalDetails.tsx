import Accordion from "@/components/Accordion";
import React, { FC, useEffect, useState } from "react";
import Input from "../Input";
import SocialLinks from "./SocialLinks";

interface Props {
    collectEntries: (section: string, data: any) => void;
}

const PersonalDetails: FC<Props> = ({ collectEntries }) => {
  const [personalDetails, setPersonalDetails] = useState(
    {
      id: Math.floor(Math.random() * 1000),
      name: "",
      role: "",
      about: "",
      socialLinks: []
    },
  );

  const getSocialLinks = (data: any ) => {
    setPersonalDetails({ ...personalDetails, socialLinks: data });
  }
  
  useEffect(() => {
    collectEntries("personalDetails", personalDetails);
  }, [personalDetails]);
  return (
    <Accordion title="Personal Details">
      <div className="pt-6">
        <div className="flex justify-between space-x-4 pb-6">
          <Input
            placeholder="full name"
            value={personalDetails.name}
            onChange={(e) =>
              setPersonalDetails({ ...personalDetails, name: e.target.value })
            }
          />
          <Input
            placeholder="job title"
            value={personalDetails.role}
            onChange={(e) =>
              setPersonalDetails({ ...personalDetails, role: e.target.value })
            }
          />
        </div>
        <Input
          textarea
          value={personalDetails.about}
          onChange={(e) =>
            setPersonalDetails({ ...personalDetails, about: e.target.value })
          }
          placeholder="a little about yourself...."
        />

        <SocialLinks collectSocialLinks={getSocialLinks} />
      </div>
    </Accordion>
  );
};

export default PersonalDetails;
