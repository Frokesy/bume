import React, { FC } from 'react'

interface FormProps {
    label: string;
    type: string;
}
const InputField: FC<FormProps> = ({label, type, ...props}) => {
  return (
      <div className="relative group text-[#ccc] mt-10">
        <input
          type={type}
          required
          className="w-full h-10 px-4 text-sm peer bg-transparent border border-[#808080] rounded-lg outline-none"
          {...props}
        />
        <label
          htmlFor={label}
          className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-[16px] peer-valid:text-[16px] group-focus-within:text-[#ccc] group-focus-within:font-mono group-focus-within:font-bold group-focus-within:pb-2 group-focus-within:pl-1 group-focus-within:h-1/2 peer-valid:h-1/2  group-focus-within:-translate-y-full peer-valid:-translate-y-full peer-valid:pl-1 peer-valid:pb-2 peer-valid:text-[#ccc] peer-valid:font-mono peer-valid:font-bold peer-valid:ease-linear peer-valid:transition-all"
        >
          {label}
        </label>
      </div>
  )
}

export default InputField
