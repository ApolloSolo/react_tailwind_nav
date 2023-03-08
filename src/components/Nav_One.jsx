import { useState } from "react";
import control from "../assets/control.png";
import logo from "../assets/logo.png";

import {AiOutlineDashboard, AiOutlineCalendar, AiOutlineSearch, AiOutlineLineChart, AiOutlineSetting} from "react-icons/ai"
import {BiChat, BiUser, BiFile, BiUpArrowCircle} from "react-icons/bi"
const Nav_One = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: <AiOutlineDashboard size={24}/> },
    { title: "Inbox", src: <BiChat size={24}/> },
    { title: "Accounts", src: <BiUser size={24}/>, gap: true },
    { title: "Schedule ", src: <AiOutlineCalendar size={24}/> },
    { title: "Search", src: <AiOutlineSearch size={24}/> },
    { title: "Analytics", src: <AiOutlineLineChart size={24}/> },
    { title: "Files ", src: <BiFile size={24}/>, gap: true },
    { title: "Setting", src: <AiOutlineSetting size={24}/> },
  ];

  return (
    <>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-500 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
               {Menu.src}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </>
  );
};
export default Nav_One;
