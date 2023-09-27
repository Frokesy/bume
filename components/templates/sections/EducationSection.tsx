import React from "react";

const EducationSection = () => {
  return (
    <div className="education">
      <div className="border-[3px] border-b-[#808080] w-[15%] mt-6"></div>
      <h2 className="text-[20px] font-bold text-[#11466d] pt-2">
        My education
      </h2>
      <section className="grid grid-cols-1 gap-y-4">
        <section>
          <h2 className="uppercase font-mono text-[15px]">
            Oxford University / 2017-2020
          </h2>
          <p className="text-[#757bc8] text-[16px] font-bold">
            B.Sc Arts in Graphics design
          </p>
        </section>
        <section>
          <h2 className="uppercase font-mono text-[15px]">Udemy / 2021-2022</h2>
          <p className="text-[#757bc8] text-[16px] font-bold">B.Sc Design</p>
        </section>
      </section>
    </div>
  );
};

export default EducationSection;
