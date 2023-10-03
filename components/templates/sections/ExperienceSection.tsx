import React from "react";

const ExperienceSection = () => {
  return (
    <div className="experience">
      <div className="border-[3px] border-b-[#808080] w-[15%] mt-6"></div>
      <h2 className="text-[20px] font-bold text-[#11466d] pt-2">
        Past Experience
      </h2>
      <section className="grid grid-cols-1 gap-y-6">
        <section>
          <div className="flex items-center space-x-6">
            <h2 className="font-bold text-[20px]">LinkedIn</h2>
            <p className="text-[13px] font-light mt-1">2016 - 2018</p>
          </div>
          <p className="text-[#757bc8] text-[16px] font-bold py-2">
            Senior Product Designer
          </p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            veritatis corporis quisquam cum. Obcaecati nihil earum a explicabo
            debitis vel.
          </p>
        </section>
        <section>
          <div className="flex items-center space-x-6">
            <h2 className="font-bold text-[20px]">Litech</h2>
            <p className="text-[13px] font-light mt-1">2018 - 2019</p>
          </div>
          <p className="text-[#757bc8] text-[16px] font-bold py-2">
            Lead Product Manager
          </p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            veritatis corporis quisquam cum. Obcaecati nihil earum a explicabo
            debitis vel.
          </p>
        </section>
        <section>
          <div className="flex items-center space-x-6">
            <h2 className="font-bold text-[20px]">Meta</h2>
            <p className="text-[13px] font-light mt-1">2019 - 2020</p>
          </div>
          <p className="text-[#757bc8] text-[16px] font-bold py-2">
            Lead Product Manager
          </p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            veritatis corporis quisquam cum. Obcaecati nihil earum a explicabo
            debitis vel.
          </p>
        </section>

        <section>
          <div className="flex items-center space-x-6">
            <h2 className="font-bold text-[20px]">Google</h2>
            <p className="text-[13px] font-light mt-1">2020 - present</p>
          </div>
          <p className="text-[#757bc8] text-[16px] font-bold py-2">
            Senior Product Manager
          </p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            veritatis corporis quisquam cum. Obcaecati nihil earum a explicabo
            debitis vel.
          </p>
        </section>
      </section>
    </div>
  );
};

export default ExperienceSection;