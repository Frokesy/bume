import React, { FC, useEffect, useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Input from "../Input";
import Accordion from "@/components/Accordion";

interface Props {
  collectEntries: (section: string, data: any) => void;
}

const Skills: FC<Props> = ({ collectEntries }) => {
  const [skillDetails, setSkillDetails] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      skill: "",
    },
  ]);
  const addNewEntry = () => {
    setSkillDetails([
      ...skillDetails,
      {
        id: Math.floor(Math.random() * 1000),
        skill: "",
      },
    ]);
  };

  const handleInputChange = (event: any, id: number, field: string) => {
    setSkillDetails((prevskillDetails) => {
      return prevskillDetails.map((tab) => {
        if (tab.id === id) {
          return { ...tab, [field]: event.target.value };
        }
        return tab;
      });
    });
  };

  const deleteEntry = (id: number) => {
    setSkillDetails((prevskillDetails) => {
      return prevskillDetails.filter((tab) => tab.id !== id);
    });
  };

  useEffect(() => {
    collectEntries("skills", skillDetails);
  }, [skillDetails]);

  return (
    <Accordion title="Skills">
      <div className="flex justify-end">
        <button
          className="flex cursor-pointer items-center mt-3 border border-[#ccc] lg:text-[14px] text-[11px] font-bold py-1 px-4 space-x-3 rounded-full hover:opacity-75"
          onClick={() => addNewEntry()}
        >
          <span>new entry</span>
          <FaPlus />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {skillDetails.map((tab) => (
          <div key={tab.id}>
            <div className="pt-6">
              <Input
                placeholder="skill"
                type="text"
                value={tab.skill}
                onChange={(e) => handleInputChange(e, tab.id, "skill")}
              />
            </div>
            <div
              className="flex justify-end pt-3 cursor-pointer hover:opacity-75"
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

export default Skills;
