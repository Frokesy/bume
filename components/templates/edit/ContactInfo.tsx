import React, { FC, useEffect, useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Input from "../Input";

interface Props {
  collectEntries: (section: string, data: any) => void;
}

const ContactInfo: FC<Props> = ({ collectEntries }) => {
  const [educationDetails, setEducationDetails] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      meansOfContact: "",
      detail: "",
    },
  ]);
  const addNewEntry = () => {
    setEducationDetails([
      ...educationDetails,
      {
        id: Math.floor(Math.random() * 1000),
        meansOfContact: "",
        detail: "",
      },
    ]);
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
    collectEntries("contactInfo", educationDetails);
  }, [educationDetails]);

  return (
    <div>
      <div className="flex justify-between pt-16 items-center">
        <h2 className="text-[#fff] text-[20px] font-semibold">
          Contact Information
        </h2>
        <button className="hover:opacity-75" onClick={() => addNewEntry()}>
          <FaPlus />
        </button>
      </div>

      {educationDetails.map((tab) => (
        <div key={tab.id}>
          <div className="flex justify-between pt-6 pb-3">
            <div className="w-[45%]">
              <Input
                placeholder="means of contact"
                type="text"
                value={tab.meansOfContact}
                onChange={(e) => handleInputChange(e, tab.id, "meansOfContact")}
              />
            </div>
            <div className="w-[50%]">
              <Input
                placeholder="detail"
                type="text"
                value={tab.detail}
                onChange={(e) => handleInputChange(e, tab.id, "detail")}
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

export default ContactInfo;
