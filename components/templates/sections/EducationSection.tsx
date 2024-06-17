import React, { FC } from "react";

interface Props {
  education: object[];
}

const EducationSection: FC<Props> = ({ education }) => {
  return (
    <div className="education">
      <div className="border-[3px] border-b-[#808080] w-[15%] mt-6"></div>
      <h2 className="lg:text-[20px] text-[16px] font-bold text-[#11466d] pt-2">
        My education
      </h2>
      {education?.length !== 0 ? (
        <div className="grid grid-cols-1 gap-y-4">
          {education?.map((tab: any) => (
            <section key={tab.id}>
              <section>
                <h2 className="uppercase font-mono lg:text-[15px] text-[13px]">
                  {tab.name} / {tab.entryYear}-{tab.graduationYear} {tab.isChecked && "(graduated)"}
                </h2>
                <p className="text-[#757bc8] lg:text-[16px] text-[12px] font-bold">
                  {tab.degree}
                </p>
              </section>
            </section>
          ))}
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-y-4">
          <section>
            <h2 className="uppercase font-mono lg:text-[15px] text-[13px]">
              Oxford University / 2017-2020
            </h2>
            <p className="text-[#757bc8] lg:text-[16px] text-[12px] font-bold">
              B.Sc Arts in Graphics design
            </p>
          </section>
        </section>
      )}
    </div>
  );
};

export default EducationSection;
