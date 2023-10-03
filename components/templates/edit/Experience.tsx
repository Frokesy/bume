import InputField from "@/components/InputField";
import React, { FC, useEffect, useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Input from "../Input";
import Accordion from "@/components/Accordion";

interface Props {
  collectEntries: (section: string, data: any) => void;
}

interface ExperienceDetail {
  id: number;
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  summary: string;
  isChecked: boolean;
}

const Experience: FC<Props> = ({ collectEntries }) => {
  const [experienceDetails, setExperienceDetails] = useState<ExperienceDetail[]>([]);
  const addNewEntry = () => {
    const newEntry: ExperienceDetail = {
      id: Math.floor(Math.random() * 1000),
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      summary: "",
      isChecked: false,
    };
    setExperienceDetails([...experienceDetails, newEntry]);
  };

  const handleCheckboxChange = (event: any, id: number) => {
    setExperienceDetails((prevexperienceDetails) => {
      return prevexperienceDetails.map((tab) => {
        if (tab.id === id) {
          return { ...tab, isChecked: event.target.checked };
        }
        return tab;
      });
    });
  };

  const handleInputChange = (event: any, id: number, field: string) => {
    setExperienceDetails((prevexperienceDetails) => {
      return prevexperienceDetails.map((tab) => {
        if (tab.id === id) {
          return { ...tab, [field]: event.target.value };
        }
        return tab;
      });
    });
  };

  const deleteEntry = (id: number) => {
    setExperienceDetails((prevexperienceDetails) => {
      return prevexperienceDetails.filter((tab) => tab.id !== id);
    });
  };

  useEffect(() => {
    collectEntries("experience", experienceDetails);
  }, [experienceDetails]);

  return (
    <Accordion title="Personal Experience">
      <div className="pb-[15vh]">
        <div className="flex justify-end">
          <button
            className="flex cursor-pointer items-center mt-3 border border-[#ccc] lg:text-[14px] text-[12px] font-bold py-1 px-4 space-x-3 rounded-full hover:opacity-75"
            onClick={() => addNewEntry()}
          >
            <span>new entry</span>
            <FaPlus />
          </button>
        </div>

        {experienceDetails.map((tab) => (
          <div key={tab.id}>
            <div className="flex justify-between">
              <div className="w-[60%]">
                <InputField
                  label="company"
                  type="text"
                  value={tab.company}
                  onChange={(e) => handleInputChange(e, tab.id, "company")}
                />
              </div>
              <div className="w-[35%]">
                <InputField
                  label="job title"
                  type="text"
                  value={tab.jobTitle}
                  onChange={(e) => handleInputChange(e, tab.id, "jobTitle")}
                />
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <div className="flex justify-between w-[60%] space-x-3">
                <div className={!tab.isChecked ? "w-[50%]" : "w-[100%]"}>
                  <Input
                    placeholder="start date"
                    value={tab.startDate}
                    onChange={(e) => handleInputChange(e, tab.id, "startDate")}
                  />
                </div>
                {!tab.isChecked && (
                  <div className="w-[50%]">
                    <Input
                      placeholder="end date"
                      value={tab.endDate}
                      onChange={(e) => handleInputChange(e, tab.id, "endDate")}
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center w-[35%] space-x-6">
                <span className="lg:text-[14px] text-[11px]">still work here?</span>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, tab.id)}
                  checked={tab.isChecked}
                  className="lg:scale-125"
                />
              </div>
            </div>
            <div className="pt-6 w-[100%]">
              <Input
                textarea
                placeholder="work summary..."
                value={tab.summary}
                onChange={(e) => handleInputChange(e, tab.id, "summary")}
              />
            </div>
            <div
              className="flex justify-end mt-1 cursor-pointer hover:opacity-75"
              onClick={() => deleteEntry(tab.id)}
            >
              <FaTrashAlt color="ee0000" />
            </div>
          </div>
        ))}
      </div>
    </Accordion>
  );
};

export default Experience;
