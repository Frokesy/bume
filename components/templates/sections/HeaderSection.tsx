import { FC, useEffect, useState } from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface HeaderProps {
  personalDetails: any;
}

const HeaderSection: FC<HeaderProps> = ({ personalDetails }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(personalDetails.socialLinks);
  }, [personalDetails.socialLinks]);

  return (
    <div className="header bg-[#1b1f24] pl-6 text-[#fff]">
      <div className="flex justify-between pt-3">
        <div className="w-[70%] max-w-[350px] pt-6">
          <div className="border-[3px] border-b-[#ccc] w-[15%]"></div>
          <h2 className="lg:text-[24px] text-[16px] font-bold pt-6">
            I&apos;m{" "}
            {personalDetails.name === ""
              ? "Ayanfeoluwa Akindele"
              : personalDetails.name}
            , a{" "}
            {personalDetails.role === ""
              ? "Frontend Engineer"
              : personalDetails.role}
            .
          </h2>

          <div>
            {links && links.length === 0 ? (
              <div className="socials pt-6 pb-4 flex space-x-3">
                <FaGithub size={18} />
                <FaTwitter size={18} />
                <FaLinkedin size={18} />
              </div>
            ) : (
              <div className="socials pt-6 pb-4 flex space-x-3">
                {links && links.map((link: any) => (
                  <div key={link.id}>
                    {link.socialName.toLowerCase() === "twitter" && (
                      <a href={link.socialUrl}>
                        <FaTwitter />
                      </a>
                    )}
                    {link.socialName.toLowerCase() === "linkedin" && (
                      <a href={link.socialUrl}>
                        <FaLinkedin />
                      </a>
                    )}
                    {link.socialName.toLowerCase() === "github" && (
                      <a href={link.socialUrl}>
                        <FaGithub />
                      </a>
                    )}
                    {link.socialName.toLowerCase() === "behance" && (
                      <a href={link.socialUrl}>
                        <FaBehance />
                      </a>
                    )}
                    {link.socialName.toLowerCase() === "dribbble" && (
                      <a href={link.socialUrl}>
                        <FaDribbble />
                      </a>
                    )}
                    {link.socialName.toLowerCase() === "facebook" && (
                      <a href={link.socialUrl}>
                        <FaFacebook />
                      </a>
                    )}
                    {link.socialName.toLowerCase() === "instagram" && (
                      <a href={link.socialUrl}>
                        <FaInstagram />
                      </a>
                    )}
                    {link.socialName.toLowerCase() === "youtube" && (
                      <a href={link.socialUrl}>
                        <FaYoutube />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
