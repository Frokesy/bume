import React, { FC } from "react";

interface Props {
  placeholder?: string;
  textarea?: boolean;
}

const Input: FC<
  Props &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLTextAreaElement>
> = ({ placeholder, textarea, ...props }) => {
  return (
    <div>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          rows={5}
          {...props}
          className="px-2 py-2 bg-transparent lg:placeholder:text-[14px] placeholder:text-[13px] border w-[100%] border-[#ccc] rounded-lg outline-none"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="px-2 py-1 bg-transparent lg:placeholder:text-[14px] placeholder:text-[12px] border border-[#ccc] w-full rounded-lg outline-none"
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
