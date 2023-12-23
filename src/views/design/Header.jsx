import {
  BiArrowBack,
  BiAddToQueue,
  BiLayout,
  BiLayer,
  BiGridAlt,
  BiImageAdd,
  BiChevronDown,
} from "react-icons/bi";
import Tooltip from "../../components/tooltip/Tooltip";
import { useState } from "react";

const Header = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const tabs = [
    {
      name: " Add elements",
      icon: <BiAddToQueue size={24} />,
    },
    {
      name: "  Layouts ",
      icon: <BiLayout size={24} />,
    },
    {
      name: " Themes",
      icon: <BiLayer size={24} />,
    },
    {
      name: "Assets",
      icon: <BiGridAlt size={24} />,
    },
    {
      name: "Images",
      icon: <BiImageAdd size={24} />,
    },
  ];
  return (
    <header className="flex justify-between h-14 w-screen border-b border-gray-200">
      <div className="flex items-center w-auto">
        <div className="flex w-14 h-full items-center justify-center border-r border-gray-200">
          <BiArrowBack size={24} />
        </div>
        <ul className="flex flex-1 gap-2 pl-2 list-none">
          {tabs.map((tab, index) => {
            return (
              <li
                key={index}
                className={`group relative rounded-xl bg-gray-100 p-2 ${
                  tabSelected == index ? "text-blue-500" : ""
                } hover:bg-gray-50`}
                onClick={() => setTabSelected(index)}
              >
                <div className="flex gap-1">
                  {tab.icon}
                  <button className="border-l border-gray-200 hover:text-black">
                    <BiChevronDown />
                  </button>
                </div>
                <Tooltip>{tab.name}</Tooltip>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex h-14 w-[300px] items-center gap-x-4 border-l border-gray-200 px-4">
        <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
          <span className="text-sm font-semibold leading-6">Preview</span>
        </button>
        <button className="flex flex-1 items-center justify-center gap-x-2 rounded-xl bg-blue-600 px-4 py-2 text-sm leading-6 text-white">
          Publish
        </button>
      </div>
    </header>
  );
};

export default Header;
