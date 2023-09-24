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

              <div className="socials pt-6 pb-4 flex space-x-3">
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

        <div className="flex justify-between">
          <div id="1" className="border-r w-[50%] border-[#808080] mt-10 px-6">
            <div className="border-[3px] border-b-[#808080] w-[15%]"></div>
            <div className="about">
              <h2 className="text-[20px] font-bold text-[#11466d] pt-4 pb-2">
                About me
              </h2>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus distinctio, reprehenderit architecto laborum,
                sunt corporis nam obcaecati aut iste quibusdam sequi quia minus
                vel rem, doloribus culpa officiis officia voluptas!
              </p>
            </div>

            <div className="education">
              <div className="border-[3px] border-b-[#808080] w-[15%] mt-10"></div>
              <h2 className="text-[20px] font-bold text-[#11466d] pt-4 pb-2">
                My education
              </h2>
              <section className="grid grid-cols-1 gap-y-4">
                <section>
                  <h2 className="uppercase font-mono text-[15px]">
                    Oxford University / 2017-2020
                  </h2>
                  <p className="text-[#757bc8] text-[16px] font-bold py-2">
                    B.Sc Arts in Graphics design
                  </p>
                </section>
                <section>
                  <h2 className="uppercase font-mono text-[15px]">
                    Udemy / 2021-2022
                  </h2>
                  <p className="text-[#757bc8] text-[16px] font-bold py-2">
                    B.Sc Design
                  </p>
                </section>
              </section>
            </div>

            <div className="contact-info">
              <div className="border-[3px] border-b-[#808080] w-[15%] mt-10"></div>
              <h2 className="text-[20px] font-bold text-[#11466d] pt-4 pb-2">
                Contact Information
              </h2>
              <section className="grid grid-cols-1 gap-y-4">
                <section>
                  <h2 className="uppercase text-[13px]">email:</h2>
                  <p className="text-[16px] py-1 font-mono">
                    info@johncarter.com
                  </p>
                </section>
                <section>
                  <h2 className="uppercase text-[13px]">call:</h2>
                  <p className="text-[16px] py-1 font-mono">+2348148175713</p>
                </section>
                <section>
                  <h2 className="uppercase text-[13px]">website:</h2>
                  <p className="text-[16px] py-1 font-mono">
                    www.josephwallace.com
                  </p>
                </section>
              </section>
            </div>

            <div className="skills">
              <div className="border-[3px] border-b-[#808080] w-[15%] mt-10"></div>
              <h2 className="text-[20px] font-bold text-[#11466d] pt-4 pb-2">
                Skills
              </h2>
              <ul className="grid grid-cols-1 gap-y-3 px-8">
                <li className="list-disc font-semibold text-[15px]">
                  Lead & Strategy
                </li>
                <li className="list-disc font-semibold text-[15px]">
                  Innovative
                </li>
                <li className="list-disc font-semibold text-[15px]">
                  Team work
                </li>
                <li className="list-disc font-semibold text-[15px]">
                  Goal oriented
                </li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="w-[50%] px-6">
            <div className="experience">
              <div className="border-[3px] border-b-[#808080] w-[15%] mt-10"></div>
              <h2 className="text-[20px] font-bold text-[#11466d] pt-4 pb-2">
                Past Experience
              </h2>
              <section className="grid grid-cols-1 gap-y-10">
                <section>
                  <div className="flex items-center space-x-6">
                    <h2 className="font-bold text-[20px]">LinkedIn</h2>
                    <p className="text-[13px] font-light mt-1">2016 - 2018</p>
                  </div>
                  <p className="text-[#757bc8] text-[16px] font-bold py-2">
                    Senior Product Designer
                  </p>
                  <p className="text-[13px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus veritatis corporis quisquam cum. Obcaecati nihil
                    earum a explicabo debitis vel.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus veritatis corporis quisquam cum. Obcaecati nihil
                    earum a explicabo debitis vel.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus veritatis corporis quisquam cum. Obcaecati nihil
                    earum a explicabo debitis vel.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus veritatis corporis quisquam cum. Obcaecati nihil
                    earum a explicabo debitis vel.
                  </p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Frokesy;
