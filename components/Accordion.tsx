import { Disclosure, Transition } from "@headlessui/react";
import { FC } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface Props {
    title: string;
    children: React.ReactNode
}

const Accordion: FC<Props> = ({ title, children }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full pt-10">
            <h2 className="text-[#fff] lg:text-[20px] text-[16px] font-semibold">{title}</h2>
            <div className="ui-open:rotate-90 ui-open:transform">
              {open ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static>
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
