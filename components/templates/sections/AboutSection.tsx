import React, { FC } from "react";

interface AboutProps {
  about: string;
}

const AboutSection: FC<AboutProps> = ({ about }) => {
  return (
    <div className="about">
      <h2 className="text-[20px] font-bold text-[#11466d] pt-2">About me</h2>
      <p className="text-[13px]">
        {about === ""
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio, reprehenderit architecto laborum, sunt corporis nam obcaecati aut iste quibusdam sequi quia minus vel rem, doloribus culpa officiis officia voluptas!"
          : about}
      </p>
    </div>
  );
};

export default AboutSection;
