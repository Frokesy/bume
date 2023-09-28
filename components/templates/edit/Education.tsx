import InputField from "@/components/InputField";
import React, { FC, useEffect, useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Input from "../Input";

interface Props {
  collectEntries: (data: any) => void;
}

const Education: FC<Props> = ({ collectEntries }) => {
  const [educationDetails, setEducationDetails] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      name: "",
      degree: "",
      entryYear: "",
      graduationYear: "",
      isChecked: false,
    },
  ]);
  const addNewEntry = () => {
    setEducationDetails([
      ...educationDetails,
      {
        id: Math.floor(Math.random() * 1000),
        name: "",
        degree: "",
        entryYear: "",
        graduationYear: "",
        isChecked: false,
      },
    ]);
  };

  const handleCheckboxChange = (event: any, id: number) => {
    setEducationDetails((prevEducationDetails) => {
      return prevEducationDetails.map((tab) => {
        if (tab.id === id) {
          return { ...tab, isChecked: event.target.checked };
        }
        return tab;
      });
    });
  };

  const handleInputChange = (event: any, id: number, field: string) => {
    setEducationDetails((prevEducationDetails) => {
      return prevEducationDetails.map((tab) => {
        if (tab.id === id) {
          return { ...tab, [field]: event.target.value };
        }
        return tab;
      });
    });
  };

  const deleteEntry = (id: number) => {
    setEducationDetails((prevEducationDetails) => {
      return prevEducationDetails.filter((tab) => tab.id !== id);
    });
  };

  useEffect(() => {
    collectEntries(educationDetails);
  }, [educationDetails]);

  return (
    <div>
      <div className="flex justify-between pt-10 items-center">
        <h2 className="text-[#fff] text-[20px] font-semibold">Education</h2>
        <button className="hover:opacity-75" onClick={() => addNewEntry()}>
          <FaPlus />
        </button>
      </div>

      {educationDetails.map((tab) => (
        <div key={tab.id}>
          <div className="flex justify-between">
            <div className="w-[60%]">
              <InputField
                label="name of institution"
                type="text"
                value={tab.name}
                onChange={(e) => handleInputChange(e, tab.id, "name")}
              />
            </div>
            <div className="w-[35%]">
              <InputField
                label="degree type"
                type="text"
                value={tab.degree}
                onChange={(e) => handleInputChange(e, tab.id, "degree")}
              />
            </div>
          </div>
          <div className="flex justify-between pt-6">
            <div className="flex justify-between w-[60%] space-x-3">
              <div className={!tab.isChecked ? "w-[50%]" : "w-[100%]"}>
                <Input
                  placeholder="entry year"
                  value={tab.entryYear}
                  onChange={(e) => handleInputChange(e, tab.id, "entryYear")}
                />
              </div>
              {!tab.isChecked && (
                <div className="w-[50%]">
                  <Input
                    placeholder="graduation year"
                    value={tab.graduationYear}
                    onChange={(e) =>
                      handleInputChange(e, tab.id, "graduationYear")
                    }
                  />
                </div>
              )}
            </div>
            <div className="flex items-center w-[35%] space-x-6">
              <span className="text-[14px]">already graduated?</span>
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e, tab.id)}
                checked={tab.isChecked}
                className="scale-125"
              />
            </div>
          </div>
          <div
            className="flex justify-end mt-1 cursor-pointer hover:opacity-75"
            onClick={() => deleteEntry(tab.id)}
          >
            <FaTrashAlt color="ee0000" size={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
