import React from "react";
import Layout from "./Layout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Frokesy = () => {
  return (
    <>
      <Layout>
        <div className="header bg-[rgb(27,31,36)] pl-6 text-[#fff]">
          <div className="flex justify-between pt-3">
            <div className="w-[50%] max-w-[350px] pt-6">
              <div className="border-[3px] border-b-[#ccc] w-[15%]"></div>
              <h2 className="lg:text-[24px] text-[16px] font-bold pt-6">
                I&apos;m Ayanfeoluwa Akindele, a Frontend Engineer.
              </h2>

              <div className="socials pt-6 flex space-x-3">
                <FaGithub size={18} />
                <FaTwitter color="#0e6e97" size={18} />
                <FaLinkedin color="#0e6e97" size={18} />
              </div>
            </div>

            <div className="lg:h-[200px] lg:w-[225px] h-[100%] w-[150px]">
              <img
                src="/assets/dp2.png"
                alt="dp"
                className="h-[100%] w-[100%]"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Frokesy;
