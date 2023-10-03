import React, { FC } from "react";

interface Props {
  experience: object[];
}

const ExperienceSection: FC<Props> = ({ experience }) => {
  return (
    <div className="education">
      <div className="border-[3px] border-b-[#808080] w-[15%] mt-6"></div>
      <h2 className="lg:text-[20px] text-[16px] font-bold text-[#11466d] pt-2">
        Past Experience
      </h2>
      {experience.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-4">
          {experience.map((exp: any) => (
            <div key={exp.id}>
              <section>
                <div className="flex items-center space-x-6">
                  <h2 className="font-bold lg:text-[20px] text-[14px]">
                    {exp.company}
                  </h2>
                  <p className="lg:text-[13px] text-[11px] font-light mt-1">
                    {exp.startDate} -{" "}
                    {exp.isChecked ? "PRESENT" : `${exp.endDate}`}
                  </p>
                </div>
                <p className="text-[#757bc8] lg:text-[16px] text-[12px] font-bold py-1 lg:py-2">
                  {exp.jobTitle}
                </p>
                <p className="lg:text-[13px] text-[11px]">{exp.summary}</p>
              </section>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-y-4">
          <section>
            <div className="flex items-center space-x-6">
              <h2 className="font-bold lg:text-[20px] text-[14px]">LinkedIn</h2>
              <p className="lg:text-[13px] text-[11px] font-light mt-1">
                2016 - 2018
              </p>
            </div>
            <p className="text-[#757bc8] lg:text-[16px] text-[12px] font-bold py-1 lg:py-2">
              Senior Product Designer
            </p>
            <p className="lg:text-[13px] text-[11px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              veritatis corporis quisquam cum. Obcaecati nihil earum a explicabo
              debitis vel.
            </p>
          </section>
          <section>
            <div className="flex items-center space-x-6">
              <h2 className="font-bold lg:text-[20px] text-[14px]">Litech</h2>
              <p className="lg:text-[13px] text-[11px] font-light mt-1">
                2018 - 2019
              </p>
            </div>
            <p className="text-[#757bc8] lg:text-[16px] text-[12px] font-bold py-1 lg:py-2">
              Lead Product Manager
            </p>
            <p className="lg:text-[13px] text-[11px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              veritatis corporis quisquam cum. Obcaecati nihil earum a explicabo
              debitis vel.
            </p>
          </section>
          <section>
            <div className="flex items-center space-x-6">
              <h2 className="font-bold lg:text-[20px] text-[14px]">Meta</h2>
              <p className="lg:text-[13px] text-[11px] font-light mt-1">
                2019 - 2020
              </p>
            </div>
            <p className="text-[#757bc8] lg:text-[16px] text-[12px] font-bold py-1 lg:py-2">
              Lead Product Manager
            </p>
            <p className="lg:text-[13px] text-[11px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              veritatis corporis quisquam cum. Obcaecati nihil earum a explicabo
              debitis vel.
            </p>
          </section>

          <section>
            <div className="flex items-center space-x-6">
              <h2 className="font-bold lg:text-[20px] text-[14px]">Google</h2>
              <p className="lg:text-[13px] text-[11px] font-light mt-1">
                2020 - present
              </p>
            </div>
            <p className="text-[#757bc8] lg:text-[16px] text-[12px] font-bold py-1 lg:py-2">
              Senior Product Manager
            </p>
            <p className="lg:text-[13px] text-[11px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              veritatis corporis quisquam cum. Obcaecati nihil earum a explicabo
              debitis vel.
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
