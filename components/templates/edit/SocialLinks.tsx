import React, { FC, useEffect, useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Input from "../Input";

interface Props {
  collectSocialLinks: (data: any) => void;
}
interface LinksDetail {
  id: number;
  socialName: string;
  socialUrl: string;
}
const SocialLinks: FC<Props> = ({ collectSocialLinks }) => {
  const [socialLinks, setSocialLinks] = useState<LinksDetail[]>([]);
  const addNewEntry = () => {
    const newEntry: LinksDetail = {
      id: Math.floor(Math.random() * 1000),
      socialName: "",
      socialUrl: "",
    };

    setSocialLinks([...socialLinks, newEntry]);
  };

  const handleInputChange = (event: any, id: number, field: string) => {
    setSocialLinks((prevsocialLinks) => {
      return prevsocialLinks.map((tab) => {
        if (tab.id === id) {
          return { ...tab, [field]: event.target.value };
        }
        return tab;
      });
    });
  };

  const deleteEntry = (id: number) => {
    setSocialLinks((prevsocialLinks) => {
      return prevsocialLinks.filter((tab) => tab.id !== id);
    });
  };

  useEffect(() => {
    collectSocialLinks(socialLinks);
  }, [socialLinks]);

  return (
    <div>
      <div className="flex items-center mt-3 justify-between">
        <span className="font-semibold">Social Links</span>
        <button
          className="flex cursor-pointer lg:text-[14px] text-[11px] hover:opacity-75"
          onClick={() => addNewEntry()}
        >
          <FaPlus />
        </button>
      </div>

      {socialLinks.map((tab) => (
        <div key={tab.id}>
          <div className="flex justify-between pt-6 pb-3">
            <div className="w-[40%]">
              <Input
                placeholder="e.g github, behance, linkedIn..."
                type="text"
                value={tab.socialName}
                onChange={(e) => handleInputChange(e, tab.id, "socialName")}
              />
            </div>
            <div className="w-[55%]">
              <Input
                placeholder="url"
                type="text"
                value={tab.socialUrl}
                onChange={(e) => handleInputChange(e, tab.id, "socialUrl")}
              />
            </div>
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
  );
};

export default SocialLinks;
