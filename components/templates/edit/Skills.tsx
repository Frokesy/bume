import InputField from "@/components/InputField";
import React, { FC, useEffect, useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Input from "../Input";

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
    <div>
      <div className="flex justify-between pt-10 items-center">
        <h2 className="text-[#fff] text-[20px] font-semibold">Skills</h2>
        <button className="hover:opacity-75" onClick={() => addNewEntry()}>
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
              <FaTrashAlt color="ee0000" size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
