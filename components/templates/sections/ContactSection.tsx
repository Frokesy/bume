import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-info">
      <div className="border-[3px] border-b-[#808080] w-[15%] mt-6"></div>
      <h2 className="text-[20px] font-bold text-[#11466d] pt-2">
        Contact Information
      </h2>
      <section className="grid grid-cols-1 gap-y-3">
        <section>
          <h2 className="uppercase text-[13px]">email:</h2>
          <p className="text-[16px] font-mono font-semibold">
            info@johncarter.com
          </p>
        </section>
        <section>
          <h2 className="uppercase text-[13px]">call:</h2>
          <p className="text-[16px] font-mono font-semibold">+2348148175713</p>
        </section>
        <section>
          <h2 className="uppercase text-[13px]">website:</h2>
          <p className="text-[16px] font-semibold font-mono">
            www.josephwallace.com
          </p>
        </section>
      </section>
    </div>
  );
};

export default ContactSection;
