import React, { FC } from "react";

interface FormProps {
  label: string;
  type: string;
  nameErr?: string;
  emailErr?: string;
  passwordErr?: string;
}
const InputField: FC<
  FormProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, type, nameErr, emailErr, passwordErr, ...props }) => {
  return (
    <div>
      <div className="relative group text-[#ccc] mt-10">
        <input
          type={type}
          required
          className={`
          ${
            nameErr &&
            "outline-none border border-red-500 rounded-lg w-full py-3 px-4 mt-1"
          }
          ${passwordErr && "outline-none border border-red-500 rounded-lg w-full py-3 px-4 mt-1"}
          ${
            emailErr &&
            "outline-none border border-red-500 rounded-lg w-full py-3 px-4 mt-1"
          }
          w-full h-10 px-4 text-sm peer bg-transparent border border-[#808080] rounded-lg outline-none`}
          {...props}
        />
        <label
          htmlFor={label}
          className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[16px] peer-valid:text-[16px] group-focus-within:text-[#ccc] group-focus-within:font-mono group-focus-within:font-bold group-focus-within:pb-2 group-focus-within:pl-1 group-focus-within:h-1/2 peer-valid:h-1/2  group-focus-within:-translate-y-full peer-valid:-translate-y-full peer-valid:pl-1 peer-valid:pb-2 peer-valid:text-[#ccc] peer-valid:font-mono peer-valid:font-bold peer-valid:ease-linear peer-valid:transition-all"
        >
          {label}
        </label>
      </div>

      {nameErr ? (
        <small className="text-red-500 text-[13px] mt-1 flex justify-start">{nameErr}</small>
      ) : null}
      {emailErr ? (
        <small className="text-red-500 text-[13px] flex justify-start mt-1">{emailErr}</small>
      ) : null}
      {passwordErr ? (
        <small className="text-red-500 text-[13px] flex justify-start mt-1 text-left">{passwordErr}</small>
      ) : null}
    </div>
  );
};

export default InputField;
