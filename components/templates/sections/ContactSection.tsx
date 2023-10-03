import React, { FC } from "react";

interface Props {
  contactInfo: object[];
}

const ContactSection: FC<Props> = ({ contactInfo }) => {
  return (
    <div className="contact-info">
      <div className="border-[3px] border-b-[#808080] w-[15%] mt-6"></div>
      <h2 className="text-[20px] font-bold text-[#11466d] pt-2">
        Contact Information
      </h2>
      {contactInfo.length !== 0 ? (
        <section className="grid grid-cols-1 gap-y-3 pt-1">
          {contactInfo.map((tab: any) => (
            <section key={tab.id}>
              <section>
                <h2 className="uppercase text-[13px]">{tab.meansOfContact}:</h2>
                <p className="text-[14px] font-mono font-semibold">
                  {tab.detail}
                </p>
              </section>
            </section>
          ))}
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-y-3 pt-1">
          <section>
            <h2 className="uppercase text-[13px]">email:</h2>
            <p className="text-[16px] font-mono font-semibold">
              ayanfeoluwaakindele1@gmail.com
            </p>
          </section>
          <section>
            <h2 className="uppercase text-[13px]">contact:</h2>
            <p className="text-[16px] font-mono font-semibold">
              +2349157881431
            </p>
          </section>
        </section>
      )}
    </div>
  );
};

export default ContactSection;
